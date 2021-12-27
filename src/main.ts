import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

import '@/styles/index.scss' //全局样式
import '@/assets/iconfont/iconfont.scss'
const app = createApp(App)

import { ElButton, ElMenu, ElIcon, ElBreadcrumb, ElBreadcrumbItem, ElInput, ElForm, ElFormItem } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
app.use(ElButton)
app.use(ElMenu)
app.use(ElIcon)
app.use(ElBreadcrumb)
app.use(ElBreadcrumbItem)
app.use(ElInput)
app.use(ElForm)
app.use(ElFormItem)
import './permission'

app.use(router)
app.use(store)
app.mount('#app')
