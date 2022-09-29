import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = '构建高效、可扩展的 Web 微服务应用程序'
const ogTitle = 'Wings Cloud'
const ogUrl = 'https://github.com/kaivanwong/wings-cloud'

export default defineConfig({
  title: 'Wings Vue 中文文档',
  description: '面向 Vue + Element Plus 生态的一款 RBAC 权限管理系统，提供工程化的开发体验和开箱即用的页面模板。',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'theme-color', content: '#B90B0B' }],
  ],

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [{ icon: 'github', link: 'https://github.com/kaivanwong/wings-vue' }],

    nav: [
      { text: '使用文档', link: '/usage/before', activeMatch: '/usage/' },
      { text: '配置文档', link: '/options/', activeMatch: '/options/' },
      {
        text: '在线演示',
        items: [
          {
            text: 'Netlify 部署版',
            link: 'https://wings-demo.netlify.app',
          },
        ],
      },
    ],
    sidebar: {
      '/usage/': [
        {
          text: '指引',
          items: [
            {
              text: '写在使用之前',
              link: '/usage/before.md',
            },
            {
              text: '准备工作',
              link: '/usage/preparatory.md',
            },
          ],
        },
        {
          text: '快速上手',
          items: [
            {
              text: '下载',
              link: '/usage/download.md',
            },
            {
              text: '安装',
              link: '/usage/install.md',
            },
            {
              text: '设计风格',
              link: '/usage/code.md',
            },
            {
              text: '主题颜色',
              link: '/usage/theme.md',
            },
            {
              text: '布局',
              link: '/usage/layout.md',
            },
            {
              text: '代码规范',
              link: '/usage/code.md',
            },
            {
              text: '环境变量',
              link: '/usage/env.md',
            },
            {
              text: '权限管理',
              link: '/usage/auth.md',
            },
          ],
        },
        {
          text: '功能使用',
          items: [
            {
              text: '国际化',
              link: '/usage/i18n.md',
            },
            {
              text: '路由（导航）',
              link: '/usage/router.md',
            },
            {
              text: '网络请求',
              link: '/usage/http.md',
            },
            {
              text: '全局状态管理',
              link: '/usage/store.md',
            },
            {
              text: '模拟数据',
              link: '/usage/mock.md',
            },
            {
              text: '组件库',
              link: '/usage/components.md',
            },
            {
              text: '样式引擎',
              link: '/usage/css.md',
            },
            {
              text: '构建编译',
              link: '/usage/build.md',
            },
          ],
        },
        {
          text: '方法使用',
          items: [
            {
              text: 'app-storage.ts',
              link: '/usage/storage.md',
            },
            {
              text: 'app-request.ts',
              link: '/usage/request.md',
            },
            {
              text: 'app-auto.ts',
              link: '/usage/auto.md',
            },
            {
              text: 'app-error.ts',
              link: '/usage/error.md',
            },
            {
              text: 'app-reg-exp.ts',
              link: '/usage/reg-exp.md',
            },
          ],
        },
        {
          text: '组件',
          items: [
            {
              text: 'app-svg-icon',
              link: '/usage/svg-icon.md',
            },
            {
              text: 'app-dialog',
              link: '/usage/dialog.md',
            },
          ],
        },
        {
          text: '其他',
          items: [
            {
              text: '图标',
              link: '/usage/icon.md',
            },
          ],
        },
      ],
      '/options/': [
        {
          text: '配置',
          items: [],
        },
      ],
    },

    footer: {
      copyright: 'Copyright © 2022-PRESENT Kaivan Wong',
    },
  },

  markdown: {
    anchor: {
      permalink: renderPermaLink,
    },
    config: md => {
      md.use(MarkDownItCustomAnchor)
    },
  },
})
