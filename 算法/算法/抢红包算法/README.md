<!--
 * @Author: shgopher shgopher@gmail.com
 * @Date: 2022-02-22 03:15:08
 * @LastEditors: shgopher shgopher@gmail.com
 * @LastEditTime: 2024-04-02 17:18:51
 * @FilePath: /408/算法/算法/抢红包算法/README.md
 * @Description: 
 * 
 * Copyright (c) 2024 by shgopher, All Rights Reserved. 
-->
# 抢红包算法


```go
func generateRedPackets(totalMoney float64, num int) []float64 {
	// 初始化
	packets := make([]float64, num)
	remainingMoney := totalMoney
	remainingNum := num

	// 循环分配红包
	for i := 0; i < num-1; i++ {
		maxMoney := remainingMoney / float64(remainingNum) * 2
		money := rand.Float64() * maxMoney
		if money < 0.01 {
			money = 0.01
		}
		packets[i] = math.Round(money*100) / 100
		remainingMoney -= money
		remainingNum--
	}

	// 最后一个红包
	packets[num-1] = math.Round(remainingMoney*100) / 100

	// 计算所有红包金额之和
	sum := 0.0
	for _, money := range packets {
		sum += money
	}

	// 如果不等于总额，则调整最后一位或最大值
	diff := totalMoney - sum

	if diff > 0 {
		// 多算了
		maxIndex := 0
		maxMoney := packets[0]
		for i, money := range packets {
			if money > maxMoney {
				maxIndex = i
				maxMoney = money
			}
		}
		packets[maxIndex] -= diff
	} else if diff < 0 {
		// 少算了
		packets[num-1] += diff
	} else {
		fmt.Println("刚好")
	}

	// 再次计算是否等于总额
	sum = 0.0
	for _, money := range packets {
		sum += money
	}
	if math.Abs(sum-totalMoney) != 0 {
		fmt.Println("红包金额之和仍然不等于总金额")
	} else {
		fmt.Println("红包金额之和再次计算后等于总金额")
	}

	return packets

```