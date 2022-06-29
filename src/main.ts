import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/index.css'

import router from './router'

import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App)
const pinia = createPinia()

// Global components
app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)

// Global plugins
app.use(pinia)
app.use(router)

app.mount('#app')
