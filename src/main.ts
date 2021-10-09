import { createApp } from 'vue'

import App from './App.vue'
import './assets/index.css'

import router from '@/router/index'
import { store, key } from '@/store'
import { rtdbPlugin } from 'vuefire'

createApp(App).use(router).use(store, key).use(rtdbPlugin).mount('#app')
