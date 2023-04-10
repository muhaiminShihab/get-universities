import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Skeleton } from 'vue-loading-skeleton';

import "vue-loading-skeleton/dist/style.css"
import './assets/app.css'

const app = createApp(App)

app.use(router)
app.use(Skeleton)

app.mount('#app')
