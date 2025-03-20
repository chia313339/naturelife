// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
  .use(router)
  .mount('#app')
