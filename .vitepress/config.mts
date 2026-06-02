import { defineConfig } from 'vitepress'

const rootNav = [
  { text: 'Home', link: '/' },
  { text: 'C1902', link: '/c1902' },
  { text: 'Orin系列', link: '/orin-nano-introduction' },
  { text: 'GPIO教程', link: '/gpio-jetpack6' },
  { text: '外设与配置', link: '/network-card-driver' }
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
    text: 'C1901 载板',
    items: [
      { text: '产品介绍', link: '/c1901' },
      { text: '刷机教程', link: '/c1901-flashing-guide' }
    ]
  },
  {
    text: 'C2401 迷你套件',
    items: [
      { text: '产品介绍', link: '/c2401-mini-kit' },
      { text: '刷入系统', link: '/c2401-system-flashing' }
    ]
  },
  {
    text: 'Orin系列',
    items: [
      { text: 'Nano说明', link: '/orin-nano-introduction' },
      { text: 'NX说明', link: '/orin-nx-introduction' },
      { text: 'Nano指南', link: '/orin-nano-guide' }
    ]
  },
  {
    text: 'GPIO教程',
    items: [
      { text: 'JetPack6', link: '/gpio-jetpack6' },
      { text: 'JetPack5', link: '/gpio-jetpack5' }
    ]
  },
  {
    text: '外设与配置',
    items: [
      { text: '网卡驱动', link: '/network-card-driver' },
      { text: 'USB配置', link: '/usb-configuration' },
      { text: 'GPIO控制', link: '/gpio-control' },
      { text: '其他外设', link: '/other-peripherals' }
    ]
  }
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'C1902', link: '/en/c1902' },
  { text: 'Orin Series', link: '/en/orin-nano-introduction' },
  { text: 'GPIO Tutorials', link: '/en/gpio-jetpack6' },
  { text: 'Peripherals', link: '/en/network-card-driver' }
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
    text: 'C1901 Carrier Board',
    items: [
      { text: 'Product Introduction', link: '/en/c1901' },
      { text: 'Flashing Guide', link: '/en/c1901-flashing-guide' }
    ]
  },
  {
    text: 'C2401 Mini Kit',
    items: [
      { text: 'Product Introduction', link: '/en/c2401-mini-kit' },
      { text: 'System Flashing', link: '/en/c2401-system-flashing' }
    ]
  },
  {
    text: 'Orin Series',
    items: [
      { text: 'Nano Description', link: '/en/orin-nano-introduction' },
      { text: 'NX Description', link: '/en/orin-nx-introduction' },
      { text: 'Nano Guide', link: '/en/orin-nano-guide' }
    ]
  },
  {
    text: 'GPIO Tutorials',
    items: [
      { text: 'JetPack 6', link: '/en/gpio-jetpack6' },
      { text: 'JetPack 5', link: '/en/gpio-jetpack5' }
    ]
  },
  {
    text: 'Peripherals and Configuration',
    items: [
      { text: 'Network Card Driver', link: '/en/network-card-driver' },
      { text: 'USB Configuration', link: '/en/usb-configuration' },
      { text: 'GPIO Control', link: '/en/gpio-control' },
      { text: 'Other Peripherals', link: '/en/other-peripherals' }
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
