import EDERequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";
const edeRequest = new EDERequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求成功的拦截");

      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log("请求失败的拦截");
      return error;
    },
    responseInterceptor: (config) => {
      console.log("响应成功的拦截");
      return config;
    },
    responseInterceptorCatch: (error) => {
      console.log("响应失败的拦截");
      return error;
    }
  }
});
export default edeRequest;
