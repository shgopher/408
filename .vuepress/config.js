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
    sidebar:'auto'
  },
}
