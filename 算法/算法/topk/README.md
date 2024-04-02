<!--
 * @Author: shgopher shgopher@gmail.com
 * @Date: 2022-02-22 03:15:11
 * @LastEditors: shgopher shgopher@gmail.com
 * @LastEditTime: 2024-04-02 17:37:46
 * @FilePath: /408/算法/算法/topk/README.md
 * @Description: 
 * 
 * Copyright (c) 2024 by shgopher, All Rights Reserved. 
-->
# topk

基本思路是这样的，如果求一个队列中的最大 k 个值，那么就使用一个小顶堆，然后每次都弹出堆顶元素。因为堆顶是最小的，那么遍历完全之后，剩下的都是最大的 k 个值。

反之，如果是求整个队列中的最小 k 个值，那么就使用一个大顶堆，然后每次都弹出堆顶元素。因为堆顶是最大的，那么遍历完全之后，剩下的都是最小的 k 个值。

## topk 最大的 k 个值
```go
package main

import (
	"container/heap"
)

// 定义一个类型，用于实现小顶堆
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
	heap.Fix(h, len(*h)-1)
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	heap.Fix(h, 0)
	return x
}

func TopK(nums []int, k int) []int {
	// 初始化一个小顶堆
	h := &IntHeap{}
	heap.Init(h)

	// 将前K个元素加入堆中
	for i := 0; i < k; i++ {
		heap.Push(h, nums[i])
	}

	// 遍历剩余元素，如果比堆顶元素大，则弹出堆顶元素并加入新元素
	for i := k; i < len(nums); i++ {
		if nums[i] > h.Peek().(int) {
			heap.Pop(h)
			heap.Push(h, nums[i])
		}
	}

	// 堆中元素即为最大的K个值
	result := make([]int, 0, k)
	for i := 0; i < k; i++ {
		result = append(result, heap.Pop(h).(int))
	}

	return result
}

func main() {
	nums := []int{1, 3, 5, 2, 4, 6, 8, 7, 9}
	k := 3
	result := TopK(nums, k)
	println(result) // [7 8 9]
}

```
## topk 最小的 k 个值
```go
package main

import (
	"container/heap"
)

// 定义一个类型，用于实现大顶堆
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
	heap.Fix(h, len(*h)-1)
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	heap.Fix(h, 0)
	return x
}

func TopKMin(nums []int, k int) []int {
	// 初始化一个大顶堆
	h := &IntHeap{}
	heap.Init(h)

	// 将前K个元素加入堆中
	for i := 0; i < k; i++ {
		heap.Push(h, nums[i])
	}

	// 遍历剩余元素，如果比堆顶元素小，则弹出堆顶元素并加入新元素
	for i := k; i < len(nums); i++ {
		if nums[i] < h.Peek().(int) {
			heap.Pop(h)
			heap.Push(h, nums[i])
		}
	}

	// 堆中元素即为最小的K个值
	result := make([]int, 0, k)
	for i := 0; i < k; i++ {
		result = append(result, heap.Pop(h).(int))
	}

	return result
}

func main() {
	nums := []int{1, 3, 5, 2, 4, 6, 8, 7, 9}
	k := 3
	result := TopKmin(nums, k)
	println(result) // [7 8 9]
}

```

## 说明 k 值个数

当使用小顶堆 (最大堆) 来解决 topk 问题时，如果堆的容量是 k 个元素，那么在向堆中添加一个新的值时，堆的元素个数会短暂地变为 k+1 个。这是因为在判断新值是否应该进入堆之前，我们首先会将这个新值推入堆中。

一旦新值被推入堆中，如果堆的大小超过了我们设定的 k 个元素，我们就需要执行一个 “sift up” 操作，也就是将新值上浮到它在堆中正确的位置。在这个过程中，如果新值比堆顶元素大，我们会将其与堆顶元素交换，并弹出堆顶元素 (即当前的最大值)。这样，堆的大小又会恢复到 k 个元素。

在实际的 topk 算法实现中，我们通常会在添加新值后立即检查堆的大小，如果堆的大小超过了 k，我们就执行相应的操作来确保堆的大小维持在 k。这样，除了在添加元素的那一刹那，堆的大小始终是 k，即始终保持着最大的 k 个元素。

以下是一个简化的示意图，说明了当小顶堆的容量为8时，添加新元素的过程：

- 初始时，小顶堆中有 8 个元素。
- 向堆中添加一个新值，假设为 9，此时堆的大小变为 9。
- 检查堆的大小，发现它超过了 8，需要进行调整。
- 将新值 9 与堆顶元素进行比较，如果 9 大于堆顶元素，则交换它们，并弹出堆顶元素。
- 经过调整后，堆的大小恢复为 8，且堆顶元素是当前堆中的最大值。

这样，通过维护小顶堆，我们可以确保任何时候堆中都只包含最大的 k 个元素