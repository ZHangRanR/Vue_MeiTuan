import { createApp } from 'vue'
import App from './App.vue'
import './CSS/init.css'
import './CSS/media(maxWidth=1200).css'
import router from './Router/index.js'
import {store} from './store/store.js'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
