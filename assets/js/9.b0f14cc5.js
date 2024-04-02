(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{427:function(t,s,n){t.exports=n.p+"assets/img/gs.497a3f12.jpeg"},472:function(t,s,n){"use strict";n.r(s);var a=n(36),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"大-o-法评价算法效率"}},[t._v("大 o 法评价算法效率")]),t._v(" "),a("p",[t._v("在大 o 法去评价一个算法的效率时，我们一定要假设 n 时无穷大，因为我们有的时候会发现，不同的数量级，同样两个算法的对比将产生不同的效果，但是凡事总有一个标准，当我们评价算法，使用大 o 法去测试算法时，n 就是无穷大，因为计算机中的数量远超人类的想象，比如有些人认为 1 亿是一个很大的数量级，但是在计算机中这不算什么，所以鉴于人类无法想象在计算机中数量的级别，我们在测试算法时默认 n 就是无穷大。")]),t._v(" "),a("p",[t._v("我们使用 "),a("code",[t._v("T(n)")]),t._v(" 表示数量 n 和时间的函数关系，"),a("code",[t._v("f(n)")]),t._v(" 表示 n 数量级的数执行的次数总和，使用 "),a("code",[t._v("T(n) = O(f(n))")]),t._v(" 公式，来表示代码的执行时间随着数量级的上升所呈现出的变化趋势。")]),t._v(" "),a("p",[t._v("其中 "),a("code",[t._v("O")]),t._v(" 表示代码执行的时间 "),a("code",[t._v("T(n)")]),t._v(" 和执行次数 "),a("code",[t._v("f(n)")]),t._v(" 表达式成正比，因为在数学的体系中，o 的概念就是表示：如果两个函数 "),a("code",[t._v("f(n)")]),t._v(" "),a("code",[t._v("g(n)")]),t._v(" 在 n 趋近于无穷大的时候，比值是一个常数，那么它们就可以看成同一个数量级的函数。")]),t._v(" "),a("p",[t._v("所以大 o 表达法并不是真的表示具体的执行时间，而仅仅是表示一种趋势，通常我们使用 "),a("code",[t._v("O(n)")]),t._v(" 此类的简写方式来表达算法的执行效率，称之为复杂度，如果前面的是 "),a("code",[t._v("T(n)")]),t._v(" 就表示时间复杂度，如果前面的是表示内存的大小的，就表示是空间复杂度，")]),t._v(" "),a("p",[a("strong",[t._v("总结一下，大 o 法表示的是随着数量的提升，消耗资源的渐进式趋势。")])]),t._v(" "),a("p",[t._v("上文说到，o 并不是真的时间，而是一种趋势，我们解释一下，看一个例子：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("j\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("我们就可以推断 "),a("code",[t._v("T(n) = (2n^2+2n+3)*每次的时间")]),t._v(" 但是其实我们并不 care 每次的时间是多少，那么假设我们舍弃了每次的时间这个参数，就相当于除以了这个参数，相除就是比值，得出来的数据使用 "),a("code",[t._v("O")]),t._v(" 来表示的话，这个算式的结局就是 "),a("code",[t._v("T(n) = O(2n^2+2n+3)")]),t._v(" 简称 "),a("code",[t._v("O(2n^2+2n+3)")]),t._v("。")]),t._v(" "),a("p",[t._v("当 n 无穷大时，系数，常量，低阶都不能左右增长的趋势，那么我们完全可以省略它们，所以这个算法的最终时间随着数量的增长而存在的增长趋势 --- 时间复杂度就是 "),a("code",[t._v("T(n) = O(n^2)")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"寻找复杂度的一些技巧"}},[t._v("寻找复杂度的一些技巧")]),t._v(" "),a("ol",[a("li",[t._v("关注循环执行最多的一段代码，总复杂度等于量级最大的代码的复杂度")]),t._v(" "),a("li",[t._v("乘法法则，嵌套代码的复杂度等于里外之积")])]),t._v(" "),a("p",[t._v("我们依然使用同样的例子去解释技巧")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("j\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到循环最多的代码就是在 "),a("code",[t._v("sum += i * j")]),t._v(" 这里，不是 "),a("code",[t._v("i := 0")]),t._v(" 因为它是常数级的代码，也不是 "),a("code",[t._v("j = 1")]),t._v("，因为它的复杂度是 n，我们观察 "),a("code",[t._v("sum += j *j")]),t._v(" 就会发现，使用嵌套的代码复杂度等于里外复杂度之乘机可以得出，它执行了 n * n = n^2 次，又根据，总复杂度等于量级最大的代码的复杂度，所以可以得出这段代码的时间复杂度是 "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("h2",{attrs:{id:"常见的时间复杂度"}},[t._v("常见的时间复杂度")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("O(1)")]),t._v(" 常量级")]),t._v(" "),a("li",[a("code",[t._v("O(n)")]),t._v(" 线性级")]),t._v(" "),a("li",[a("code",[t._v("O(log n)")]),t._v(" 对数级")]),t._v(" "),a("li",[a("code",[t._v("O(n log n)")]),t._v(" 线性对数级")]),t._v(" "),a("li",[a("code",[t._v("O(n^2)")]),t._v(" 平方级")]),t._v(" "),a("li",[a("code",[t._v("O(n^3)")]),t._v(" 立方级")]),t._v(" "),a("li",[a("code",[t._v("O(n^k)")]),t._v(" k 次放级")]),t._v(" "),a("li",[a("code",[t._v("O(2^n)")]),t._v(" 指数级")]),t._v(" "),a("li",[a("code",[t._v("O(n!)")]),t._v(" 阶乘级")])]),t._v(" "),a("p",[t._v("其中后两个是非常低效的算法，谁这么写，就可以滚蛋了，所以不考虑这两种算法时间复杂度了。")]),t._v(" "),a("p",[t._v("常量级：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("线性级：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("i\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("线性级的特殊情况：")]),t._v(" "),a("p",[t._v("当算法里有 m，n，并且它们俩无法获取规模时，必须使用 O(m+n) 的方式表示")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对数级和线性对数级：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("最大值是 n，从 1 开始每次都是乘以 2，直到接近 n 结束，我们可以看每次的执行过程是 1 2 4 8 16 可以看出是以 2 为底数的次方增长的，那么它跟 n 的关系就是：2^i = n，我们只需要知道 i 的次数增长趋势就获得了这次的复杂度，那么 f(i) = log 2 n，根据省略系数的原则，这次的时间复杂度就是 O(n) = logn")]),t._v(" "),a("p",[t._v("线性对数：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("根据乘积原则，这段代码的时间复杂度是 nlogn")]),t._v(" "),a("p",[t._v("对数级的时间复杂度，是目前来说最佳的算法复杂度，因为常量级的复杂度本身几乎没什么意义，它没有变化的趋势，从趋势来说，一个无穷大的 n，使用对数得到的值在众多算法中是最佳的。")]),t._v(" "),a("p",[a("img",{attrs:{src:n(427),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"空间复杂度分析"}},[t._v("空间复杂度分析")]),t._v(" "),a("p",[t._v("常见的空间复杂度有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("O(1)")])]),t._v(" "),a("li",[a("code",[t._v("O(n)")])]),t._v(" "),a("li",[a("code",[t._v("O(n^2)")])])]),t._v(" "),a("p",[a("code",[t._v("O(log n)")]),t._v(" 和 "),a("code",[t._v("O(nlog n)")]),t._v(" 几乎不会用到，其它更多的也几乎遇不到。")]),t._v(" "),a("h2",{attrs:{id:"时间复杂度的几种概念"}},[t._v("时间复杂度的几种概念")]),t._v(" "),a("ul",[a("li",[t._v("最好时间复杂度")]),t._v(" "),a("li",[t._v("最坏时间复杂度")]),t._v(" "),a("li",[t._v("平均时间复杂度")]),t._v(" "),a("li",[t._v("均摊时间复杂度")])]),t._v(" "),a("p",[t._v("最好时间复杂度：")]),t._v(" "),a("ul",[a("li",[t._v("最理想的情况下，执行这段代码的时间复杂度，比如数组中查找 x 的时候，第一个就找到了")])]),t._v(" "),a("p",[t._v("最坏时间复杂度：")]),t._v(" "),a("ul",[a("li",[t._v("最糟糕的情况下的时间复杂度，比如数组中查找 x 的时候，最后一个才找到")])]),t._v(" "),a("p",[t._v("平均时间复杂度：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("平常用的那个就是平均时间复杂度")]),t._v("，因为大 o 法是要省略常数，系数，低阶的，所以使用概率去算出来的平均时间复杂度省略完成以后还是那个")])]),t._v(" "),a("p",[t._v("使用冒泡法举一个例子：")]),t._v(" "),a("p",[t._v("((1 + 2 + ..+n)/n)*n，结果算出来的去掉各种系数还是 O(n^2)")]),t._v(" "),a("p",[t._v("均摊时间复杂度：")]),t._v(" "),a("ul",[a("li",[t._v("举个例子，一个算法有插入操作，n 次操作，第一次 "),a("code",[t._v("O(n)")]),t._v("，就跟着 n-1 次的 O(1) 的插入操作，将 n 平均分摊到 n-1 的上面，那么得到的均摊时间复杂度就还是 o(1) 这就是均摊时间复杂度。")])]),t._v(" "),a("p",[t._v("这里给出排序算法的平均时间复杂度，最好时间复杂度，最坏时间复杂度。")]),t._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/算法/算法/排序算法/冒泡排序.html"}},[t._v("冒泡排序")]),t._v(" "),a("code",[t._v("O(n^2)")]),t._v(" "),a("code",[t._v("O(n)")]),t._v(" "),a("code",[t._v("O(n^2)")])],1),t._v(" "),a("li",[t._v("选择排序 "),a("code",[t._v("O(n^2)")]),t._v(" "),a("code",[t._v("O(n^2)")]),t._v(" "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("li",[t._v("插入排序 "),a("code",[t._v("O(n^2)")]),t._v(" "),a("code",[t._v("O(n)")]),t._v(" "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("li",[t._v("希尔排序 "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(n(logn)^2)")]),t._v(" "),a("code",[t._v("O(n(logn)^2)")])]),t._v(" "),a("li",[t._v("归并排序 "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(nlogn)")])]),t._v(" "),a("li",[t._v("快速排序 "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("li",[t._v("堆排序 "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(nlogn)")]),t._v(" "),a("code",[t._v("O(nlogn)")])]),t._v(" "),a("li",[t._v("计数排序 "),a("code",[t._v("O(n+k)")]),t._v(" "),a("code",[t._v("O(n+k)")]),t._v(" "),a("code",[t._v("O(n+k)")])]),t._v(" "),a("li",[t._v("桶排序 "),a("code",[t._v("O(n+k)")]),t._v(" "),a("code",[t._v("O(n+k)")]),t._v(" "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("li",[t._v("基数排序 "),a("code",[t._v("O(n*k)")]),t._v(" "),a("code",[t._v("O(n*k)")]),t._v(" "),a("code",[t._v("O(n*k)")])])]),t._v(" "),a("h2",{attrs:{id:"如何寻找最好的算法"}},[t._v("如何寻找最好的算法")]),t._v(" "),a("p",[t._v("我们通过一道例题去讲解一下这个问题。")]),t._v(" "),a("h2",{attrs:{id:"通过排序算法的案例去讨论复杂度"}},[t._v("通过排序算法的案例去讨论复杂度")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/35641088/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《计算之魂》"),a("OutboundLink")],1),t._v("24 - 58")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100017301",target:"_blank",rel:"noopener noreferrer"}},[t._v("《数据结构与算法之美》"),a("OutboundLink")],1),t._v("03，04")])])])}),[],!1,null,null,null);s.default=v.exports}}]);