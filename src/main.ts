import './assets/styles/main.less'
import 'ant-design-vue/dist/reset.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initI18n } from './i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(initI18n)
app.mount('#app')
