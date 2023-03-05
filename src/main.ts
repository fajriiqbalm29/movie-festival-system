import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/route'
import { registerLayouts } from './layouts/registerLayout';
import { makeServer } from "./server/index"
import axios from "@/utils/service";
import VueAxios from 'vue-axios'
import BaseButton from "@/components/Global/BaseButton.vue"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

makeServer()

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
registerLayouts(app);
app.use(VueAxios, axios)
app.use(router)
app.component('BaseButton', BaseButton)
app.use(pinia)
app.provide('axios', app.config.globalProperties.axios) // provide 'axios'

app.mount('#app')
