import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'https://restcountries.eu/rest/v2';

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
