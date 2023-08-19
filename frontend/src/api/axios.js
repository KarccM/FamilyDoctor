import axios from "axios";
import useLocalStorage from '../hooks/useLocalStorage';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
}
);
axiosInstance.interceptors.response.use(
  (response) => response,
  error => error
);

function post(url, data) {
  let { readFromLocalStorage } = useLocalStorage()
  let userId = readFromLocalStorage("userId")
  return axiosInstance.post(url, { ...data, user_id: userId });
}

function get(url) {
  return axiosInstance.get(url);
}
export { axiosInstance, post, get }