import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app=createApp(App)
app.config.globalProperties.$baseUrl="http://localhost:8000/api/"
app.use(router);
app.mount('#app');
