import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface EDERequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

export interface EDERequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: EDERequestInterceptors<T>;
  isLoading?: boolean;
}
