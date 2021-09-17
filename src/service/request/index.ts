import axios from "axios";
import type { AxiosInstance } from "axios";
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

    //所有实例都有的拦截器
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

  request<T>(config: EDERequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求添加拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个响应的拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          return error;
        });
    });
  }
}

export default EDERequest;
