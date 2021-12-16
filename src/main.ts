import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

const app = createApp(App)
import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/theme-chalk/index.css'
app.use(ElementPlus)

app.use(router)
app.use(store)
app.mount('#app')
