import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

const ogDescription = '构建高效、可扩展的 Web 微服务应用程序'
const ogTitle = 'Wings Cloud'
const ogUrl = 'https://github.com/wingscloud'

export default defineConfig({
  title: 'Wings Cloud',
  description: '使用 TypeScript & JavaScript 构建高效、可扩展的企业级应用程序',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
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
    logo: '/favicon.svg',

    socialLinks: [{ icon: 'github', link: 'https://github.com/wingscloud' }],

    nav: [
      { text: '指引', link: '/guide/start', activeMatch: '/guide/' },
      { text: '配置文档', link: '/config/', activeMatch: '/config/' },
      { text: '插件集成', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: '生态产品',
        items: [
          {
            text: 'Wings Cloud Admin',
            link: 'https://github.com/wingscloud/wings-cloud-admin',
          },
          {
            text: 'Wings Cloud Web',
            link: 'https://github.com/wingscloud/wings-cloud-web',
          },
          {
            text: 'Wings Cloud Service',
            link: 'https://github.com/wingscloud/wings-cloud-service',
          },
          {
            text: 'Wings Cloud Cli',
            link: 'https://github.com/wingscloud/wings-cloud-cli',
          },
        ],
      },
      {
        text: '在线演示',
        items: [
          {
            text: 'Wings Cloud Admin',
            link: 'https://wings-cloud-admin.netlify.app',
          },
          {
            text: 'Wings Cloud Web',
            link: 'https://wings-cloud-web.netlify.app',
          },
        ],
      },
      { text: '更新指南', link: '/update/', activeMatch: '/update/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '为什么选 Wings Cloud',
              link: '/usage/why.md',
            },
            {
              text: '开始',
              link: '/usage/start.md',
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
          ],
        },
      ],
      '/options/': [
        {
          text: '配置',
          items: [
            {
              text: '环境变量',
              link: '/options/env.md',
            },
            {
              text: '枚举',
              link: '/options/enum.md',
            },
            {
              text: '构建选项',
              link: '/options/build.md',
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
