import { createApp } from "vue"
import App from './App.vue'
import './app.css'
import Modal from './components/Modal'


createApp(App).component('modal', Modal).mount('#app')
