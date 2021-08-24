import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface EDERequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

interface EDERequestConfig extends AxiosRequestConfig {
  interceptors?: EDERequestInterceptors;
}

class EDERequest {
  instance: AxiosInstance;
  interceptors?: EDERequestInterceptors;
  constructor(config: EDERequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors?.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export default EDERequest;
