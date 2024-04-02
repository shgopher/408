<!--
 * @Author: shgopher shgopher@gmail.com
 * @Date: 2024-04-02 14:35:26
 * @LastEditors: shgopher shgopher@gmail.com
 * @LastEditTime: 2024-04-02 14:47:26
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
### GO语言版
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
但是现实中我们很容易遇到流的情况，也就是说数据其实不来源于数组而是一个channel，那么让我们实现一下 channel的情况

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