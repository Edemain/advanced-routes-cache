import axios from "axios";
import type { AxiosInstance } from "axios";
import type { EDERequestInterceptors, EDERequestConfig } from "./type";

import { ElLoading } from "element-plus";
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";

const DEFAULT_LOADING = true;

class EDERequest {
  instance: AxiosInstance;
  interceptors?: EDERequestInterceptors;
  loading?: ILoadingInstance;
  isLoading: boolean;
  constructor(config: EDERequestConfig) {
    this.instance = axios.create(config);
    //保存基本信息
    this.isLoading = config.isLoading ?? DEFAULT_LOADING;
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
        if (this.isLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0, 0, 0, 0.5)"
          });
        }
        return config;
      },
      (err) => {
        console.log("all-instance:请求失败的拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("all-instance:响应成功的拦截");
        // 将loading移除
        this.loading?.close();
        const data = res.data;
        if (data.returnCode == "-1001") {
          console.log("请求失败，错误码-1001");
        } else {
          return data;
        }
      },
      (err) => {
        console.log("all-instance:响应失败的拦截");
        // 将loading移除
        this.loading?.close();
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误~");
        }
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

      //判断是否需要loading
      if (config.isLoading === false) {
        this.isLoading = config.isLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个响应的拦截器
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoading设置false, 这样不会影响下一个请求
          this.isLoading = DEFAULT_LOADING;
          resolve(res);
        })
        .catch((error) => {
          this.isLoading = DEFAULT_LOADING;
          reject(error);
          return error;
        });
    });
  }

  get<T>(config: EDERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T>(config: EDERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T>(config: EDERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T>(config: EDERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default EDERequest;
