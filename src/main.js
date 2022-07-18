import { createApp } from "vue";
import App from "./App.vue";
import router from "./app-routes";
import store from "./app-store";

createApp(App).use(store).use(router).mount("#app");
