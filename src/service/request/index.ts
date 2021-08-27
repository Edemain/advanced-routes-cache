import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { EDERequestInterceptors, EDERequestConfig } from "./type";

class EDERequest {
  instance: AxiosInstance;
  interceptors?: EDERequestInterceptors;
  constructor(config: EDERequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    this.instance.interceptors.request.use(
      (config) => {
        console.log("all-instance:请求成功的拦截");
        return config;
      },
      (err) => {
        console.log("all-instance:请求失败的拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        console.log("all-instance:响应成功的拦截");
        return config;
      },
      (err) => {
        console.log("all-instance:响应失败的拦截");
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export default EDERequest;
