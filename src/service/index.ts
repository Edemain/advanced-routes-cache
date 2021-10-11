import EDERequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";
const edeRequest = new EDERequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      //携带特殊token
      const token = "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log("单个实例-请求成功的拦截");

      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log("单个实例-请求失败的拦截");
      return error;
    },
    responseInterceptor: (res) => {
      // console.log("单个实例-响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (error) => {
      console.log("单个实例-响应失败的拦截");
      return error;
    }
  }
});
export default edeRequest;
