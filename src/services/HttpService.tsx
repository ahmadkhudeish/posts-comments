import axios, { AxiosResponse } from 'axios';
import EnvConstants from '../config/EnvConstants';

const instance = axios.create({
  baseURL: EnvConstants.BASE_URL,
});

instance.interceptors.response.use((response: AxiosResponse<any>) => {
  if (response.data?.status > 299 || response.data?.status < 200) {
    throw Promise.reject(`Error ${response?.data?.status ?? response?.status} with message :  ${response.data?.message}`)
  }
  return response.data;
})

class HttpService {
  static get<T>(path: string, params?: any): Promise<T> {
    return instance.get<any, T>(path, {
      params: params,
    });
  }

  static delete<T>(path: string, params?: any): Promise<T> {
    return instance.delete<any, T>(path, {
      ...params,
    });
  }

  static post<T>(
    path: string,
    payload: any,
    params?: any,
  ): Promise<T> {
    return instance.post<any, T>(path, payload, params);
  }

  static put<T>(
    path: string,
    payload: any,
    params?: any,
  ): Promise<T> {
    return instance.put<any, T>(path, payload, {
      ...params,
    });
  }
}

export default HttpService;
