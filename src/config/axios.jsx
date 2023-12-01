import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

// initial axios config
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const axiosCancelToken = axios.CancelToken;
