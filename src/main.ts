import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const myApp = createApp(App)

myApp.use(BootstrapVue3)

myApp.mount('#app')
