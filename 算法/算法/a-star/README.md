<!--
 * @Author: shgopher shgopher@gmail.com
 * @Date: 2024-02-27 14:41:41
 * @LastEditors: shgopher shgopher@gmail.com
 * @LastEditTime: 2024-02-27 14:46:30
 * @FilePath: /408/算法/算法/a*/README.md
 * @Description: 
 * 
 * Copyright (c) 2024 by shgopher, All Rights Reserved. 
-->
# A* 寻路算法

A *(A-star) 寻路算法是一种在图形平面上，有多个节点的网络中，寻找一条从起始点到目标点的最低成本路径的算法。它属于最佳优先搜索算法，广泛应用于路径规划、图形遍历等领域。A* 算法的核心思想是利用启发式函数来估计从当前节点到目标节点的最低成本，从而优先搜索估计成本较低的路径。

A*算法的关键组成部分包括：

1. **节点 (Node)**：表示搜索空间中的一个点，通常包含位置信息、父节点指针、实际成本 (从起点到当前点的成本)、启发式成本 (从当前点到目标点的估计成本) 等。

2. **启发式函数 (Heuristic Function)**：用于估计从当前节点到目标节点的剩余距离。常见的启发式函数有曼哈顿距离 (Manhattan Distance) 和欧几里得距离 (Euclidean Distance)。

3. **实际成本 (G)**：从起点到当前节点的实际成本。

4. **估计成本 (F)**：实际成本 G 与启发式成本 H 的和，即 F = G + H。A*算法使用 F 值来优先选择节点进行扩展。

5. **优先队列 (Priority Queue)**：用于存储待处理的节点，通常按照 F 值排序。

A*算法的步骤如下：

1. 将起始节点放入优先队列。
2. 从优先队列中取出 F 值最小的节点 (称为当前节点)。
3. 检查当前节点是否为目标节点。如果是，回溯并构建路径；如果不是，继续下一步。
4. 将当前节点的所有未访问邻居节点 (包括它们的实际成本 G 和启发式成本 H) 添加到优先队列。
5. 对于每个邻居节点，如果它已经在优先队列中，更新它的 F 值 (如果新的 F 值更低)。
6. 重复步骤 2-5，直到找到目标节点或优先队列为空。

下面是一个使用 Go 语言实现的简单 A*寻路算法示例。这个例子假设我们在一个二维网格上进行寻路，使用曼哈顿距离作为启发式函数。

```go
package main

import (
	"container/heap"
	"fmt"
)

// Node represents a point in the grid with additional information for A* search.
type Node struct {
	X, Y     int
	G, H, F  int // G: cost from start, H: heuristic cost, F: total cost (G + H)
	Parent   *Node // The node that led to this node
	Opened   bool   // Whether the node is in the open set
	Closed   bool   // Whether the node is in the closed set
}

// Implement the heap interface for the priority queue.
type PriorityQueue []*Node

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].F < pq[j].F
}
func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}
func (pq *PriorityQueue) Push(x interface{}) {
	*pq = append(*pq, x.(*Node))
}
func (pq *PriorityQueue) Pop() interface{} {
	n := len(*pq)
	x := (*pq)[n-1]
	*pq = (*pq)[:n-1]
	return x
}

// ManhattanDistance calculates the Manhattan distance between two points.
func ManhattanDistance(a, b *Node) int {
	return abs(a.X-b.X) + abs(a.Y-b.Y)
}

// AStar finds the shortest path from start to end using A* algorithm.
func AStar(start, end *Node, grid [][]int) []*Node {
	openList := PriorityQueue{{start}}
	closedSet := make(map[string]*Node)

	for len(openList) > 0 {
		current := openList.Pop().(*Node)
		if current == end {
			path := make([]*Node, 0)
			for current != nil {
				path = append(path, current)
				current = current.Parent
			}
			for i := len(path)/2 - 1; i >= 0; i-- {
				j := len(path) - 1 - i
				path[i], path[j] = path[j], path[i]
			}
			return path
		}

		closedSet[fmt.Sprintf("%d,%d", current.X, current.Y)] = current

		for _, neighbor := range getNeighbors(current, grid) {
			tentativeG := current.G + 1 // Assuming a cost of 1 to move to a neighbor

			if neighbor.Closed || (tentativeG > neighbor.G && !neighbor.Opened) {
				continue
			}

			if _, exists := closedSet[fmt.Sprintf("%d,%d", neighbor.X, neighbor.Y)]; !exists {
				neighbor.Opened = true
				neighbor.Parent = current
				neighbor.G = tentativeG
				neighbor.H = ManhattanDistance(neighbor, end)
				neighbor.F = neighbor.G + neighbor.H

				openList = append(openList, neighbor)
			} else if tentativeG < neighbor.G {
				neighbor.Parent = current
				neighbor.G = tentativeG
				neighbor.H = ManhattanDistance(neighbor, end)
				neighbor.F = neighbor.G + neighbor.H

				openList = updateOpenList(openList, neighbor)
			}
		}
	}

	return nil
}

// getNeighbors returns a list of valid neighbors for the given node.
func getNeighbors(node *Node, grid [][]int) []*Node {
	var neighbors []*Node
	for _, dir := range []struct{ x, y int }{{-1, 0}, {1, 0}, {0, -1}, {0, 1}} {
		x, y := node.X+dir.x, node.Y+dir.y
		if x >= 0 && x < len(grid) && y >= 0 && y < len(grid[0]) && grid[x][y] == 0 {
			neighbors = append(neighbors, &Node{X: x, Y: y})
		}
	}
	return neighbors
}

// updateOpenList updates the open list with the new node.
func updateOpenList(openList PriorityQueue, node *Node) PriorityQueue {
	for i, n := range openList {
		if n.X == node.X && n.Y == node.Y {
			openList = append(openList[:i], openList[i+1:]...)
			break
		}
	}
	heap.Push(&openList, node)
	return openList
}

// abs returns the absolute value of an integer.
func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}

func main() {
	// Define a simple grid where 0 represents walkable space and 1 represents an obstacle.
	grid := [][]int{
		{0, 0, 0, 0, 0},
		{0, 1, 1, 0, 0},
		{0, 0, 0, 1, 0},
		{0, 1, 1, 1, 0},
		{0, 0, 0, 0, 0},
	}

	start := &Node{X: 0, Y: 0}
	end := &Node{X: 4, Y: 4}

	path := AStar(start, end, grid)
	for _, n := range path {
		fmt.Printf("%d,%d\n", n.X, n.Y)
	}
}
```

这个 Go 语言实现的 A*算法示例考虑了一个简单的二维网格，其中 0 表示可行走的空间，1 表示障碍物。算法从起点开始，通过优先队列管理待处理的节点，并在找到目标节点时回溯以构建路径。这个例子使用了曼哈顿距离作为启发式函数，并且假设移动到相邻节点的成本为 1。

请注意，这个例子是为了演示 A*算法的基本结构，实际应用中可能需要根据具体情况调整启发式函数、节点表示、邻居节点的获取方式等。此外，为了简化，这个例子没有处理动态变化的网格或更复杂的环境。在实际的游戏开发或路径规划应用中，可能需要更复杂的数据结构和算法优化。