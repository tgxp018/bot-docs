import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '记账助手 Bot',
  description: 'Telegram 群组记账 / USDT 代收机器人使用文档',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/basic' },
      { text: '高级功能', link: '/guide/advanced' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '基本操作', link: '/guide/basic' },
            { text: '附加操作', link: '/guide/advanced' },
          ],
        },
        {
          text: '进阶配置',
          items: [
            { text: '自定义汇率', link: '/guide/custom-rate' },
            { text: '分组统计', link: '/guide/group-stats' },
            { text: '账单显示配置', link: '/guide/settings' },
          ],
        },
        {
          text: '高级权限',
          items: [
            { text: '管理员操作', link: '/guide/admin' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    footer: {
      message: '记账助手 Bot · 内部使用文档',
      copyright: 'Copyright © 2026',
    },
  },
})
