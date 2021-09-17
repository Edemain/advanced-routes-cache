import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { globalRegister } from "./global";
import edeRequest from "./service";
edeRequest
  .request({
    url: "/home/multidata",
    method: "GET",
    interceptors: {
      requestInterceptor: (config) => {
        console.log("单个请求-请求成功的拦截！");

        return config;
      },
      responseInterceptor: (res) => {
        console.log("单个响应-响应成功的拦截");
        return res;
      }
    }
  })
  .then((res) => {
    console.log(res);
  });

const app = createApp(App);
app.use(store);
app.use(router);
app.use(globalRegister);
app.mount("#app");
