// 把各种组件组装起来
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
// import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
import '@/router/permission'
import * as ELIcons from '@element-plus/icons-vue'
import filters from './utils/filters'

const app = createApp(App)
// for (const [key, component] of Object.entries(ELIcons)) {
//     console.log(key)
//     app.component(key, component)
//   }
// SvgIcon(app)
filters(app)
createApp(App).use(store).use(router).mount('#app')
