import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { globalRegister } from "./global";
import edeRequest from "./service";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(globalRegister);
app.mount("#app");
