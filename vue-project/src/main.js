import './assets/main.css'

// $primary: #9E402C;

import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router.js"

createApp(App)
  .use(router)
  .mount('#app')