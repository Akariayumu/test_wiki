import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/test_wiki/",
  title: "KyWiki",
  description: "A Site For Jetson Orin",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'C1902', link: '/c1902' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'C1902 载板',
        items: [
          { text: '产品介绍', link: '/c1902' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
