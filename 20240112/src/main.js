import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);
// 呼叫後端api使用
app.config.globalProperties.$base = "http://localhost:8000/api/";
// 呼叫後端圖檔用
app.config.globalProperties.$url = "http://localhost:8000/";
app.use(store).use(router).mount("#app");
