---
layout: home

title: Wings Vue
titleTemplate: 权限管理系统

hero:
  name: Wings Vue
  text: 权限管理系统
  tagline: 面向 Vue + Element Plus 生态，提供工程化的开发体验和开箱即用的页面模板。
  image:
    src: /logo.svg
    alt: Wings Cloud
  actions:
    - theme: brand
      text: 快速上手
      link: /usage/before
    - theme: alt
      text: 安装
      link: /usage/download
    - theme: alt
      text: 在线演示
      link: https://github.com/kaivanwong/wings-cloud

features:
  - icon: 💡
    title: 技术栈
    details: 基于 Vue3、Element Plus、Vite、TypeScript、Pinia 和 Unocss 等最新技术栈搭建；
  - icon: 🚀
    title: 工程化
    details: 工程化的开发体验，内置 Eslint + Stylelint + Prettier + Husky，规范代码统一风格；
  - icon: 📦
    title: 业务模板
    details: 内置开箱即用的管理系统页面和网站常用页面模板，页面代码采用模块化开发，可维护性好，扩展性高；
  - icon: 🧩
    title: 插件
    details: 集成了动态路由、国际化多语言、环境变量、动态主题、暗黑模式、多种布局、自动导入等常见功能；
  - icon: 📌
    title: 功能
    details: 减少学习成本、过度封装，只作了增删改查功能的提炼，其具有良好的扩展性，提供完整的代码注释；
  - icon: 📐
    title: 扩展
    details: 使用 Vue Use 作为工具库的扩展，使用 Mockjs 模拟接口数据返回，内置 Svg 图标作为补充；
---

<script setup>
import { onMounted } from 'vue'
import { getRelease } from './.vitepress/utils/api.js'

onMounted(() => {
  getRelease()
})
</script>
