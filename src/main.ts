import { createApp } from 'vue'
import './assets/HotspotStyle.css'
import './style.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'	


const app = createApp(App)
app.use(ElementUI)
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}