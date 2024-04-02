<!--
 * @Author: shgopher shgopher@gmail.com
 * @Date: 2024-04-02 14:35:26
 * @LastEditors: shgopher shgopher@gmail.com
 * @LastEditTime: 2024-04-02 15:29:31
 * @FilePath: /408/算法/算法/蓄水池算法/README.md
 * @Description: 
 * 
 * Copyright (c) 2024 by shgopher, All Rights Reserved. 
-->
# 蓄水池算法

蓄水池算法 (Reservoir Sampling) 是一种用于从大量数据流中随机选取固定大小样本的经典算法。它的核心思想是维护一个固定大小的 “蓄水池”，初始时将数据流中的前 k 个项目存入蓄水池。之后对于第 i 个数据项，以 k/i 的概率将其替换蓄水池中的一个随机位置的项目。这样就能确保每个项目在最终的样本中被选中的概率是相等的。

算法步骤如下：

1. 初始化一个固定大小为 k 的数组 reservoir，将数据流中的前 k 个项目存入 reservoir。
2. 对于后续的第 i(i>k) 个项目：
   - 以 k/i 的概率决定是否将其存入 reservoir 中，存入则替换 reservoir 中的一个随机位置的项目。
   - 以 1-k/i 的概率不做操作。
3. 重复步骤 2，直到遍历完整个数据流。

最后 reservoir 中存储的就是从数据流中随机选取的 k 个样本。

蓄水池算法的优点是能够高效地从大量数据流中提取固定大小的随机样本，同时只需要有限的内存空间。它被广泛应用于在线统计分析、数据挖掘等场合。该算法的时间复杂度是 O(n)，空间复杂度是 O(k)，其中 n 是数据流的大小，k 是需要提取的样本大小。

## 探究蓄水池算法的数学准确性
***蓄水池算法能保证每个数据项目最终被选中的概率都是 `k/n`***

原因在于它遵循了一种 “无偏” 的随机过程。

具体来说，对于第 i 个数据项目，它被选入蓄水池的概率是 `k/i`。那些之前已经被选入蓄水池的数据项，在第 `i` 个数据项到来时，有 `1/k` 的概率被新数据项替换掉。

因此，对于任意一个数据项 `x`：

1. 如果 `x` 是前 `k` 个数据项之一，它最初被选入蓄水池的概率是 `1`。
2. 如果 `x` 是第 `i(i>k)` 个数据项，它被选入蓄水池的概率是 `k/i`。
   - 一旦选入，在后续的过程中，它在每一步都有 `(k-1)/k` 的概率保留在蓄水池中 (因为有 `1/k` 的概率被替换掉)。
   - 所以在最后一步，它仍在蓄水池中的概率是：
      `k/i * [(k-1)/k]^(n-i) = k/n`

因此，无论 x 是在开始时被选入，还是在中间某个步骤被选入，最终它存在于蓄水池中的概率都是 `k/n`。

通过这种 “无偏” 的随机替换过程，蓄水池算法能够保证从 `n` 个数据项中选取 k 个样本，每个数据项被选中的概率都是相等的 `k/n`。这一性质使得它成为一个公平且高效的随机采样算法。
## 代码实现
### GO 语言版
普通版，在普通版中我们默认数据的来源是固定个数的数据，所以这里我们直接使用数组作为数据来源。
```go
import (
    "math/rand"
)

// ReservoirSample 使用蓄水池算法从数据流中随机选取k个样本
func ReservoirSample(stream []int, k int) []int {
    // 初始化reservoir
    reservoir := make([]int, k)
    for i := 0; i < k; i++ {
        reservoir[i] = stream[i]
    }

    // 遍历剩余数据流
    for i := k; i < len(stream); i++ {
        j := rand.Intn(i + 1) // 生成[0, i]范围内的随机整数
        if j < k {
            reservoir[j] = stream[i] // 以k/(i+1)的概率替换reservoir中的元素
        }
    }

    return reservoir
}
```
但是现实中我们很容易遇到流的情况，也就是说数据其实不来源于数组而是一个 channel，那么让我们实现一下 channel 的情况

```go
import (
    "math/rand"
)

// ReservoirSample 使用蓄水池算法从数据流中随机选取k个样本
func ReservoirSample(stream <-chan int, k int) []int {
    // 初始化reservoir
    reservoir := make([]int, k)
    for i := 0; i < k; i++ {
        reservoir[i] = <-stream
    }

    // 遍历剩余数据流
    i := k
    for x := range stream {
        j := rand.Intn(i + 1) // 生成[0, i]范围内的随机整数
        if j < k {
            reservoir[j] = x // 以k/(i+1)的概率替换reservoir中的元素
        }
        i++
    }

    return reservoir
}
```
### ts 版本
```ts
function reservoirSample<T>(stream: Iterable<T>, k: number): T[] {
  // 初始化reservoir
  const reservoir = new Array<T>(k);
  const iterator = stream[Symbol.iterator]();

  // 填充前k个元素
  for (let i = 0; i < k; i++) {
    const { value, done } = iterator.next();
    if (done) {
      // 如果数据流长度小于k,直接返回所有元素
      return reservoir.slice(0, i);
    }
    reservoir[i] = value;
  }

  // 遍历剩余数据流
  let index = k;
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break; // 数据流结束
    }

    const j = Math.floor(Math.random() * (index + 1)); // 生成[0, index]范围内的随机整数
    if (j < k) {
      reservoir[j] = value; // 以k/(index+1)的概率替换reservoir中的元素
    }
    index++;
  }

  return reservoir;
}
```
## 蓄水池算法和洗牌算法的异同点

蓄水池抽样算法 (Reservoir Sampling) 和洗牌算法 (Shuffling Algorithm) 虽然都用于从一个集合中随机选取元素，但它们的适用场景和实现方式有所不同。下面是它们的异同点比较：

**异同点：**

1. **适用场景**：
   - 蓄水池抽样算法适用于从一个未知大小的数据流中随机选取 k 个元素，并且只需要线性空间。
   - 洗牌算法则适用于从一个已知大小的数组或列表中随机选取任意个数的元素，包括全排列。

2. **实现方式**：
   - 蓄水池抽样算法通过在每个元素到来时，以一定的概率将其保留到蓄水池 (reservoir) 中，从而在线性时间内获得随机样本。
   - 洗牌算法则通过交换元素的位置来打乱原有顺序，从而生成一个随机的排列。

3. **时间复杂度**：
   - 蓄水池抽样算法的时间复杂度为 O(n)，其中 n 为数据流的大小。
   - 洗牌算法的时间复杂度通常为 O(n)，其中 n 为数组或列表的长度。

4. **空间复杂度**：
   - 蓄水池抽样算法仅需要常数空间来存储样本，空间复杂度为 O(k)，其中 k 为需要抽取的样本大小。
   - 洗牌算法它通常是在原数据上进行就地操作。所以空间复杂度是 O(1)。

**相同点：**

1. 它们都可以用于从一个集合中随机选取元素，并且可以保证选取结果的等概率性。

2. 它们都利用了随机数来实现随机选取，并且通过概率分析可以证明其正确性。

3. 它们都具有线性时间复杂度，适合处理大规模数据。

总的来说，蓄水池抽样算法更适合于从大型数据流中在线获取随机样本，而洗牌算法则更适合于对已知大小的数组或列表进行随机排列。两种算法在不同的场景下都有其适用之处，并且都是实现等概率随机抽样的经典算法。