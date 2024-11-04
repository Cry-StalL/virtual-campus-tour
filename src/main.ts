import { createApp } from 'vue'
import './assets/HotspotStyle.css'
import './style.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import axios from 'axios'

import App from './App.vue'	

const app = createApp(App)
app.use(ElementUI)
app.use(router)
app.use(axios)
app.mount('#app')