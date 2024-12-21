import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(router) // 挂载
app.use(pinia)

app.mount('#app')
