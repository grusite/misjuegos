import { createApp } from 'vue'

import App from './App.vue'
import './assets/index.css'

import router from './router'
import { store, key } from './store/index'
// import { rtdbPlugin } from 'vuefire'

createApp(App).use(router).use(store, key).mount('#app')
