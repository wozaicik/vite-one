import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'normalize.css'
import './style.css'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
