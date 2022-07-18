import { createApp } from "vue";
import App from "./App.vue";
import router from "./app/app-routes";
import store from "./app/app-store";

createApp(App).use(store).use(router).mount("#app");
