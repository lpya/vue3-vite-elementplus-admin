import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/styles/index.scss' //全局样式
import '@/assets/iconfont/iconfont.scss'
const app = createApp(App)

import { ElTag, ElButton, ElMenu, ElIcon, ElBreadcrumb, ElBreadcrumbItem, ElInput, ElForm, ElFormItem, ElTooltip, ElDropdown, ElDropdownItem, ElDropdownMenu, ElRow, ElCol, ElScrollbar, ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
app.use(ElButton)
app.use(ElMenu)
app.use(ElIcon)
app.use(ElBreadcrumb)
app.use(ElBreadcrumbItem)
app.use(ElInput)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElTooltip)
app.use(ElDropdown)
app.use(ElDropdownMenu)
app.use(ElDropdownItem)
app.use(ElRow)
app.use(ElCol)
app.use(ElScrollbar)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElTag)
import './permission'

import './mock/index'
app.use(router)
app.use(store)
app.mount('#app')
