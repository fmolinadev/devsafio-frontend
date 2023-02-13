import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
});

apiClient.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
});

export default apiClient;
