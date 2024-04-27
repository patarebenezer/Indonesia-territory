import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const ApiClient = () => {
 const instance = axios.create({
  baseURL: "",
  headers: {
   "Content-Type": "application/json",
   "X-Requested-With": "XMLHttpRequest",
  },
 });

 instance.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
   return {
    ...config,
    headers: { ...config.headers, "Content-Type": "multipart/form-data" },
   } as InternalAxiosRequestConfig<any>;
  }

  return config;
 });

 instance.interceptors.response.use(
  (response) => {
   return response;
  },
  (error) => {
   console.error(`[interceptor][error]`, error);
   throw error;
  }
 );

 return instance;
};

const setClientToken = ({
 token,
 instance,
}: {
 token: string;
 instance: AxiosInstance;
}) => {
 if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 } else {
  delete instance.defaults.headers.common["Authorization"];
 }
};

const axiosClient = ApiClient();

export { axiosClient, setClientToken };
