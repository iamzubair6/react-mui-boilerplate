import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {
  getAccessToken,
  getLocalization,
  getRefreshToken,
  setAccessToken,
} from './localStorage';

const onProd = Boolean(process.env.NODE_ENV === 'production');

// const baseURL = onProd
//   ? "https://api.demo.com" change it
//   : "http://192.168.1.101:8000";

const baseURL = 'https://api.demo.com'; //change it

const axiosApi = axios.create({ baseURL });
export const axiosRaw = axios.create({ baseURL });

// Add a request interceptor
axiosApi.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    config.headers['x-lang-config'] = getLocalization();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// stack axios queries before refreshing
let isRefreshingToken = false;
let requestQueue = [];

const addRequestToQueue = (callback) => {
  requestQueue.push(callback);
};

const resolveQueueRequests = () => {
  requestQueue.forEach((callback) => callback());
  requestQueue = [];
};

const rejectQueueRequests = () => {
  requestQueue.forEach((callback) => callback(false));
  requestQueue = [];
};

// Add a response interceptor
axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;

    if (status === 401) {
      if (!isRefreshingToken) {
        isRefreshingToken = true;

        axiosRaw
          .post('/account/token/refresh/', {
            refresh: getRefreshToken(),
          })
          .then(({ data: { access } = {} }) => {
            setAccessToken(access);
            resolveQueueRequests();
          })
          .catch(() => {
            rejectQueueRequests();
          })
          .finally(() => {
            isRefreshingToken = false;
          });
      }

      const retryOriginalRequest = new Promise((resolve, reject) => {
        addRequestToQueue((refreshed = true) => {
          if (refreshed) {
            resolve(axiosApi(originalRequest));
          }
          reject(originalRequest);
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axiosApi(`${queryKey[0]}`);
  return data;
};

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: onProd,
      refetchOnWindowFocus: onProd,
      refetchOnMount: onProd,
      refetchOnReconnect: onProd,
      queryFn: defaultQueryFn,
    },
  },
});

export default axiosApi;
