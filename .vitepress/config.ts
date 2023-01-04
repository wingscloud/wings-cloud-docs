import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = '使用 TypeScript & JavaScript 构建高效、可扩展的多端应用程序'
const ogTitle = 'Wings Cloud'
const ogUrl = 'https://github.com/wingscloud'

export default defineConfig({
  title: 'Wings Cloud',
  description: '使用 TypeScript & JavaScript 构建高效、可扩展的多端应用程序',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'theme-color', content: '#b90b0b' }],
  ],

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/favicon.svg',

    socialLinks: [{ icon: 'github', link: 'https://github.com/wingscloud' }],

    nav: [
      { text: '指引', link: '/guide/start', activeMatch: '/guide/' },
      {
        text: '生态产品',
        items: [
          {
            text: 'RBAC Admin Web',
            link: 'https://github.com/wingscloud/rbac-admin-web',
          },
          {
            text: 'RBAC Admin Service',
            link: 'https://github.com/wingscloud/rbac-admin-service',
          },
          {
            text: 'Portal Website',
            link: 'https://github.com/wingscloud/portal-website',
          },
          {
            text: 'Shop Weapp',
            link: 'https://github.com/wingscloud/shop-weapp',
          },
          {
            text: 'Wash Car Weapp',
            link: 'https://github.com/wingscloud/wash-car-weapp',
          },
          {
            text: 'Talks App',
            link: 'https://github.com/wingscloud/talks-app',
          },
        ],
      },
      {
        text: '在线演示',
        items: [
          {
            text: 'RBAC Admin',
            link: 'https://rbac-admin.netlify.app',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: 'Wings Cloud 是什么？',
              link: '/guide/what',
            },
            {
              text: '快速开始',
              link: '/guide/start',
            },
          ],
        },
        {
          text: '生态产品',
          items: [
            {
              text: 'RBAC Admin Web',
              link: 'https://github.com/wingscloud/rbac-admin-web',
            },
            {
              text: 'RBAC Admin Service',
              link: 'https://github.com/wingscloud/rbac-admin-service',
            },
            {
              text: 'Portal Website',
              link: 'https://github.com/wingscloud/portal-website',
            },
            {
              text: 'Shop Weapp',
              link: 'https://github.com/wingscloud/shop-weapp',
            },
            {
              text: 'Wash Car Weapp',
              link: 'https://github.com/wingscloud/wash-car-weapp',
            },
            {
              text: 'Talks App',
              link: 'https://github.com/wingscloud/talks-app',
            },
          ],
        },
        {
          text: '在线演示',
          items: [
            {
              text: 'RBAC Admin',
              link: 'https://rbac-admin.netlify.app',
            },
          ],
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
