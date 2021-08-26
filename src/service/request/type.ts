import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface EDERequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

export interface EDERequestConfig extends AxiosRequestConfig {
  interceptors?: EDERequestInterceptors;
}
