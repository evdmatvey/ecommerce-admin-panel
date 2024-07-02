import axios, { CreateAxiosDefaults } from 'axios';
import Cookies from 'js-cookie';
import { Tokens } from '../types';

const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
  return accessToken || null;
};

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

export const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
