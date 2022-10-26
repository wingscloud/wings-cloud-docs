---
layout: home

title: Wings Vue
titleTemplate: 权限管理系统

hero:
  name: Wings Vue
  text: 权限管理系统
  tagline: 一款开箱即用的通用中后台权限管理系统，面向 Vue 生态，基于最新技术栈搭建，提供工程化的开发体验、高质量的页面模板、丰富实用的内建功能
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
    title: 最新技术栈
    details: 基于 Vue3、Vite、TypeScript、Element Plus、Axios、Pinia、Unocss 等最新技术栈构建；
  - icon: 🚀
    title: 工程化开发
    details: 集成 Eslint + Stylelint + Prettier，提供基于 Vite 的工程化配置，合理的代码目录及代码注释；
  - icon: 🎨
    title: 开箱即用
    details: 提供多种开箱即用的管理系统页面模板，支持丰富的布局与主题，同时保证多端的良好适配性；
  - icon: 🌐
    title: 国际化
    details: 基于 Vue-i18n 的国际化多语言解决方案，搭配 i18N Ally IDE 插件，实现多语言项目的高效开发；
  - icon: 🔑
    title: 权限验证
    details: 提供完整的、精确到按钮级的细颗粒度权限验证功能，搭配用户角色管理，适应多数业务场景；
  - icon: 📦
    title: 丰富的组件
    details: 二次封装了常用的三方组件，如：上传、富文本编辑器、地图、图表等，提供代码生成工具；
  - icon: 🕹️
    title: 接口模拟
    details: 使用 Mockjs 作为接口数据的模拟，体验项目完整功能，根据预留接口快速对接服务应用程序；
  - icon: 🎯
    title: 内置函数
    details: 内置开发常用的工具函数及钩子函数，如：自动导入、网络请求、缓存、增删改查、状态管理等；
---

<script setup>
import { onMounted } from 'vue'
import { getRelease } from './.vitepress/utils/api.js'

onMounted(() => {
  getRelease()
})
</script>
