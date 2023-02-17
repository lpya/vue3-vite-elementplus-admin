import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import '@/styles/index.scss' //全局样式
import '@/assets/iconfont/iconfont.scss'

const app = createApp(App)
// 指令
import { permission } from '@/directives/permission'
import { dynamic } from '@/directives/dynamic'
permission(app)
dynamic(app)

import './permission'
import './mock/index'

app.use(router)
app.use(store)
app.mount('#app')
