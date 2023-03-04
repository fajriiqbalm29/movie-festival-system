import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/route'
import { registerLayouts } from './layouts/registerLayout';

const app = createApp(App)
registerLayouts(app);

app.use(router)
app.use(createPinia())

app.mount('#app')
