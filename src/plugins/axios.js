import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("Unauthorized");
    }
    if (error.response.status === 403) {
      console.log("Forbbiden");
    }
    if (error.response.status === 404) {
      console.log("Not found");
    }
    return Promise.reject(error);
  },
);

export default api;
