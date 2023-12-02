import axios, { AxiosResponse, AxiosError } from 'axios';
import { InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080'
});

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const { method, url } = config;
  console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`);

  return config;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  const { method, url } = res.config;
  const { code, message } = res.data;
  if (code === 'SUCCESS') {
    console.log(
      `🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${code} : ${message}`,
    );
  } else {
    console.log(
      `🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${code} : ${message}`,
    );
  }

  return res;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { method, url } = error.config as InternalAxiosRequestConfig;
    if (error.response) {
      const { statusCode, message } = error.response.data;
      console.log(
        `🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`,
      );
    }
  } else {
    console.log(`🚨 [API] | Error ${error.message}`);
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onError);