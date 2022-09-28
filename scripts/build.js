const vitpress = require('vitepress')
const path = require('path')
const chalk = require('chalk')
const rewriteTitle = require('../.vitepress/rewrite-title')

rewriteTitle().then(() => {})
