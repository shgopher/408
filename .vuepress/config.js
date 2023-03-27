module.exports = {
  // 站点配置

  title: '408',
  description: '🔥 讲解408知识的书，包含了：算法，数据库，网络操作系统 等一揽子知识体系',
  head: [
    ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico`}],
  ],
  host: 'localhost',
  base:'/408/',
  port: 8082,
  dest: '.vuepress/dist',
  plugins: [
    ['vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'center',
        defaultTitle: ''
      }
    ],
    ['vuepress-plugin-container',
      {
        type: 'quote',
        before: info => `<div class="quote"><p class="title">${info}</p>`,
        after: '</div>'
      },
    ],
    ['vuepress-plugin-container',
      {
        type: 'not-print',
        defaultTitle: ''
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-GFKQEFHX3B'
      }
    ],
    ['@vuepress/back-to-top'],
    ['@vuepress/nprogress'],
    'vuepress-plugin-baidu-autopush',
    ['vuepress-plugin-baidu-tongji-analytics', {
      key: '45951f610a1fa82985715b79291a8de9'
    }],
  ],
  markdown: {
    anchor: {permalink: false},
    toc: {includeLevel: [2, 3]},
  },
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/42873232',
    lastUpdated: '最后更新',
    smoothScroll: false,
    editLinks: false,
    repo: 'https://github.com/shgopher/408',
    docsBranch: 'release',
    editLinkText: '在GitHub中编辑',
    // 添加导航栏
    nav: [
      {
        text: '首页', link: '/'
      }, 
      {
        text:"系列教程",
        ariaLabel: 'Menu',
        items:[
          {
            text:"GOFamily 【go语言教程】",
            link:"https://shgopher.github.io/GOFamily/",
          },
          {
            text:"408  【基础408知识教程】",
            link:"https://shgopher.github.io/408/",
          },
          {
            text:"luban  【系统设计教程】",
            link:"https://shgopher.github.io/luban/",
          },
          {
            text:"dingdang  【工具教程】",
            link:"https://shgopher.github.io/dingdang/",
          },
          {
            text:"god  【给程序员写的书】",
            link:"https://shgopher.github.io/god/",
          },
        ]
      },
      {
        text:'微信公众号',link:'/#wechat.png',
      },
      {
        text:'作者',link:'https://shgopher.github.io/',
      },
    ], 
    sidebar:[
      {
        title:'算法',
        collapsable:false,
        children:[
          {
            title:'数据结构',
            collapsable:false,
            path:"/算法/数据结构/",
            children:[
              {
                title:'数组',
                collapsable:false,
                path:"/算法/数据结构/数组/",
              },
              {
                title:'链表',
                collapsable:false,
                path:"/算法/数据结构/链表/",
              },
              {
                title:'队列/栈',
                collapsable:false,
                path:"/算法/数据结构/队列栈/",
              },
              {
                title:'堆',
                collapsable:false,
                path:"/算法/数据结构/堆/",
              },
              {
                title:'哈希表',
                collapsable:false,
                path:"/算法/数据结构/哈希表/",
              },
              {
                title:'二叉树',
                collapsable:false,
                path:"/算法/数据结构/二叉树/",
              },
              {
                title:'并查集',
                collapsable:false,
                path:"/算法/数据结构/并查集/",
              },
              {
                title:'字典树',
                collapsable:false,
                path:"/算法/数据结构/字典树/",
              },
              {
                title:'ac自动机',
                collapsable:false,
                path:"/算法/数据结构/ac自动机/",
              },
              {
                title:'线段树',
                collapsable:false,
                path:"/算法/数据结构/线段树/",
              },
              {
                title:'b树',
                collapsable:false,
                path:"/算法/数据结构/b树/",
              },
              {
                title:'布隆过滤器',
                collapsable:false,
                path:"/算法/数据结构/布隆过滤器/",
              },
              {
                title:'布谷鸟过滤器',
                collapsable:false,
                path:"/算法/数据结构/布谷鸟过滤器/",
              },
              {
                title:'lru cache',
                collapsable:false,
                path:"/算法/数据结构/lrucache/",
              },
              {
                title:'图',
                collapsable:false,
                path:"/算法/数据结构/图/",
              },
              {
                title:'位图',
                collapsable:false,
                path:"/算法/数据结构/位图/",
              },
              {
                title:'跳表',
                collapsable:false,
                path:"/算法/数据结构/跳表/",
              },
              {
                title:'舞蹈链',
                collapsable:false,
                path:"/算法/数据结构/舞蹈链/",
              },
              {
                title:'森林',
                collapsable:false,
                path:"/算法/数据结构/森林/",
              },
            ]
          },
          {
            title:'算法',
            collapsable:false,
            path:"/算法/算法/",
            children:[
              {
                title:'dp',
                collapsable:false,
                path:"/算法/算法/dp/",
              },
              {
                title:'贪心',
                collapsable:false,
                path:"/算法/算法/贪心/",
              },
              {
                title:'分治',
                collapsable:false,
                path:"/算法/算法/分治/",
              },
              {
                title:'回溯',
                collapsable:false,
                path:"/算法/算法/回溯/",
              },
              {
                title:'dfs',
                collapsable:false,
                path:"/算法/算法/dfs/",
              },
              {
                title:'bfs',
                collapsable:false,
                path:"/算法/算法/bfs/",
              },
              {
                title:'排序算法',
                collapsable:false,
                path:"/算法/算法/排序算法/",
              },
              {
                title:'二分法',
                collapsable:false,
                path:"/算法/算法/二分法/",
              },
              {
                title:'拓跋排序',
                collapsable:false,
                path:"/算法/算法/拓跋排序/",
              },
              {
                title:'最短路径',
                collapsable:false,
                path:"/算法/算法/最短路径/",
              },
              {
                title:'短地址生成算法',
                collapsable:false,
                path:"/算法/算法/短地址生成算法/",
              },
              {
                title:'字符串匹配算法',
                collapsable:false,
                path:"/算法/算法/字符串匹配算法/",
              },
              {
                title:'限流算法',
                collapsable:false,
                path:"/算法/算法/限流算法/",
              },
              {
                title:'唯一id生成算法',
                collapsable:false,
                path:"/算法/算法/唯一id生成算法/",
              },
              {
                title:'抢红包算法',
                collapsable:false,
                path:"/算法/算法/抢红包算法/",
              },
              {
                title:'topk',
                collapsable:false,
                path:"/算法/算法/topk/",
              },
              {
                title:'洗牌算法',
                collapsable:false,
                path:"/算法/算法/洗牌算法/",
              },
              {
                title:'限流算法',
                collapsable:false,
                path:"/算法/算法/限流算法/",
              },
            ],
          },
          {
            title:'算法题',
            collapsable:false,
            path:"/算法/算法题/",
            children:[
              {
                title:'链表类',
                collapsable:false,
                path:"/算法/算法题/链表类/",
              },
              {
                title:'堆，栈，队列，哈希表',
                collapsable:false,
                path:"/算法/算法题/堆栈队列哈希表/",
              },
              {
                title:'二分法',
                collapsable:false,
                path:"/算法/算法题/二分法/",
              },
              {
                title:'双指针',
                collapsable:false,
                path:"/算法/算法题/双指针/",
              },
              {
                title:'BFS',
                collapsable:false,
                path:"/算法/算法题/BFS/",
              },
              {
                title:'DFS',
                collapsable:false,
                path:"/算法/算法题/DFS/",
              },
              {
                title:'前缀和',
                collapsable:false,
                path:"/算法/算法题/前缀和/",
              },
              {
                title:'并查集',
                collapsable:false,
                path:"/算法/算法题/并查集/",
              },
              {
                title:'字典树',
                collapsable:false,
                path:"/算法/算法题/字典树/",
              },
              {
                title:'单调栈/队列',
                collapsable:false,
                path:"/算法/算法题/单调栈队列/",
              },
              {
                title:'扫描线算法',
                collapsable:false,
                path:"/算法/算法题/扫描线算法/",
              },
              {
                title:'TreeMap',
                collapsable:false,
                path:"/算法/算法题/TreeMap/",
              },
              {
                title:'动态规划',
                collapsable:false,
                path:"/算法/算法题/动态规划/",
              },
            ],
          },
          {
            title:'综合题',
            collapsable:false,
            path:"/算法/综合题/",
            children:[
              {
                title:'《计算之魂》综合题',
                collapsable:false,
                path:"/算法/综合题/计算之魂.md",
              },
            ]
          }
        ],
      },
      {
        title:'网络',
        collapsable:false,
        children:[],
      },
      {
        title:'数据库',
        collapsable:false,
        
        children:[],
      },
      {
        title:'操作系统',
        collapsable:false,
        children:[],
      },
      {
        title:'设计模式',
        collapsable:false,
        children:[],
      },
      {
        title:'组成原理',
        collapsable:false,
        children:[],
      },

    ],
  },
}
