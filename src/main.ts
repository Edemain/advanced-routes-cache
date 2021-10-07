import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { globalRegister } from "./global";
import edeRequest from "./service";
import "normalize.css";
import "@/assets/css/index.less";

const app = createApp(App);
app.use(store);
app.use(router);
// app.use(globalRegister);
app.mount("#app");
interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}

edeRequest
  .get<DataType>({
    url: "/home/multidata",
    isLoading: false,
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
