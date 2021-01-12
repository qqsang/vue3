import { createApp } from 'vue';
import App from './app/app.vue';
import router from './app/app.router';
/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 挂载路由
 */
app.use(router);

/**
 * 挂载应用
 */
app.mount('#app');
