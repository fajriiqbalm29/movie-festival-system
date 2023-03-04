import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/route'
import { registerLayouts } from './layouts/registerLayout';
import { makeServer } from "./server/index"
import axios from "@/utils/service";
import VueAxios from 'vue-axios'
import Auth from "@/plugins/auth"
import BaseButton from "@/components/Global/BaseButton.vue"

makeServer()

const app = createApp(App)
registerLayouts(app);

app.use(VueAxios, axios)
app.use(router)
app.use(Auth)
app.component('BaseButton', BaseButton)
app.use(createPinia())
app.provide('axios', app.config.globalProperties.axios) // provide 'axios'

app.mount('#app')
