import { createApp } from 'vue'

import App from './App.vue'
import './assets/index.css'

import router from '@/router/index'
import { store, key } from '@/store'

createApp(App).use(router).use(store, key).mount('#app')
