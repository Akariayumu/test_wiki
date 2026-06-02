import { defineConfig } from 'vitepress'

const rootNav = [
  { text: 'Home', link: '/' },
  { text: 'C1902', link: '/c1902' },
  { text: '刷机教程', link: '/flashing-guide' },
  { text: 'Examples', link: '/markdown-examples' }
]

const rootSidebar = [
  {
    text: 'C1902 载板',
    items: [
      { text: '产品介绍', link: '/c1902' },
      { text: '刷机教程', link: '/flashing-guide' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'C1902', link: '/en/c1902' },
  { text: 'Flashing Guide', link: '/en/flashing-guide' },
  { text: 'Examples', link: '/en/markdown-examples' }
]

const enSidebar = [
  {
    text: 'C1902 Carrier Board',
    items: [
      { text: 'Product Introduction', link: '/en/c1902' },
      { text: 'Flashing Guide', link: '/en/flashing-guide' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: 'Markdown Examples', link: '/en/markdown-examples' },
      { text: 'Runtime API Examples', link: '/en/api-examples' }
    ]
  }
]

export default defineConfig({
  base: "/test_wiki/",
  title: "KyWiki",
  description: "A Site For Jetson Orin",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: rootNav,
        sidebar: rootSidebar
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
