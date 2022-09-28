import { h } from 'vue'
import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import SvgImage from './components/SvgImage.vue'
import './styles/vars.css'
import './custom.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage).use(ElementPlus)
  },
}
