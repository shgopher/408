<!--
 * @Author: shgopher shgopher@gmail.com
 * @Date: 2022-02-22 03:15:15
 * @LastEditors: shgopher shgopher@gmail.com
 * @LastEditTime: 2024-04-02 15:13:15
 * @FilePath: /408/算法/算法/洗牌算法/README.md
 * @Description: 
 * 
 * Copyright (c) 2024 by shgopher, All Rights Reserved. 
-->
# 洗牌算法
洗牌算法是指将一组有序的元素重新进行排列顺序的算法，通常用于生成随机排列。洗牌算法常见的应用包括：

1. **生成游戏规则**：在很多棋牌游戏中，需要随机打乱卡牌或棋子的顺序，以确保游戏的公平性。

2. **加密和安全**：在密码学中，洗牌算法可用于加密密钥的生成，以增加密码的强度。

3. **随机抽样**：在统计学和模拟领域，常常需要从一个总体中随机选取样本进行研究和分析。

常见的洗牌算法有：

1. **Fisher-Yates 洗牌算法**：也被称为 Knuth 洗牌算法，是一种非常高效和简单的现代洗牌算法。它通过遍历数组，并在每一步中随机交换当前元素与剩余未处理的元素中的一个。时间复杂度为 O(n)。
```go
import (
    "math/rand"
    "time"
)

func init() {
    rand.Seed(time.Now().UnixNano())
}

func shuffle(arr []int) []int {
    for i := len(arr) - 1; i > 0; i-- {
        j := rand.Intn(i + 1) //[0,i]
        arr[i], arr[j] = arr[j], arr[i]
    }
    return arr
}
```
2. **Sattolo's 算法**：也是一个线性时间算法，与 Fisher-Yates 类似，但更加简洁。

3. **冒泡排序洗牌算法**：利用冒泡排序的交换操作特性，通过大量的交换操作来达到随机化的目的。时间复杂度为 O(n^2)。

4. **插入排序洗牌算法**：类似于冒泡排序洗牌，利用插入排序的过程来达到随机洗牌的效果。

## 如何保证真随机性

假设我们有一个真正的随机数生成器，能够产生真正的随机数序列，那么 Fisher-Yates 洗牌算法确实可以保证生成真正随机的排列。其原因如下：

1. **等概率性**
   
   Fisher-Yates 算法在每一步中，都会从剩余的未处理元素中等概率随机选择一个元素与当前元素交换位置。由于使用的是真正的随机数生成器，因此每个元素被选中的概率都是相等的 1/(n-i)。这保证了算法得到的最终排列是等概率的。

2. **无后效性**

   Fisher-Yates 算法在处理每个元素时，只依赖于当前步骤随机选择的结果，而与之前步骤的结果无关。也就是说，算法在每一步都是独立无后效的。这个性质保证了算法在任何中间状态下，都可以将剩余元素等概率地排列。

3. **排列的可达性**

   Fisher-Yates 算法可以生成全排列 n！中的任何一种排列，并且每一种排列的概率都是相等的 1/n！。这是因为算法将第一个元素与剩余元素中随机选择的一个交换位置，对于剩余的 n-1 个元素，又以同样的方式独立地进行随机交换，依次类推。因此，任意一种排列的生成路径都是等概率的。

4. **不可预测性**

   由于使用了真正的随机数生成器，每一步中随机选择的结果都是真正随机且不可预测的。这意味着生成的排列序列不可能事先预测或重现，除非知道了完整的随机数序列。

从概率论的角度来看，Fisher-Yates 算法利用了真随机数生成器产生的独立同分布随机变量，将它们独立地应用于排列生成的每一个步骤。由于每一步的操作都是独立等概率的，因此最终生成的排列也就是等概率的。同时，由于每一步都利用了真正的随机性，因此整个算法也具有了真正的随机性。

当然，这种分析是建立在我们拥有真正的随机数生成器的前提之上。在实际计算机系统中，由于使用的都是伪随机数生成器，所以 Fisher-Yates 算法产生的排列只能被认为是 “近似随机” 的，其随机性质取决于伪随机数生成器的质量。

### 等概率性的数学论证

在 Fisher-Yates 算法中，每一步选择要交换的元素时，确实是从剩余未处理的元素中随机选取。因此，被选中的概率会随着剩余元素个数的减少而变化。

具体来说，对于第一个元素，它被选中的概率是 1/n。对于第二个元素，它被选中的概率是 1/(n-1)。以此类推，对于第 i 个元素，它被选中的概率是 1/(n-i+1)。

这看起来似乎破坏了等概率性的假设。然而，我们需要注意到，虽然每个元素被选中的概率不同，但每个排列出现的概率却是相同的。

我们可以这样计算：对于任意一个长度为 n 的排列，它出现的概率是：

(1/n) *(1/(n-1)) * (1/(n-2)) *...* (1/1) = 1/n！

也就是说，虽然每个元素被选中的概率不同，但是通过这些不同的概率相乘，最终每一种可能的排列出现的概率都是相同的 1/n！。

这个性质即保证了 Fisher-Yates 算法生成的排列是均匀分布的，任何一个排列出现的概率都是相等的。

算法在每个中间步骤中，被选中元素的概率分布是不均匀的。但是，最终的排列分布仍然是均匀的，这正是 Fisher-Yates 算法的精妙之处。

通过这种 “不均匀选择” 与 “均匀输出” 的性质，Fisher-Yates 算法在线性时间复杂度下，就能够生成真正均匀随机的排列。这种看似矛盾的性质，实际上是算法的核心原理所在。