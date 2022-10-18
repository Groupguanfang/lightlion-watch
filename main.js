import { createApp } from "vue";
import "./Assets/Common.less";
import App from "./App.vue";
import router from "./Router"


const watchUI = createApp(App)
watchUI.use(router)
watchUI.mount("#app")
