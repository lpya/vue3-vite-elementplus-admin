import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/styles/index.scss' //全局样式
import '@/assets/iconfont/iconfont.scss'
const app = createApp(App)

import './permission'

import './mock/index'
app.use(router)
app.use(store)
app.mount('#app')
