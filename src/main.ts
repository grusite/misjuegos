import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/index.css'

import router from './router'

import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App)

// Global components
app.component('default-layout', DashboardLayout).component('empty-layout', EmptyLayout)

// Global plugins
app.use(router).use(createPinia())

app.mount('#app')
