import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:10000",
  headers: { "Content-Type": "application/json" }
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use((res) => res, (err) => {
  if (err.response && err.response.status === 401) {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  }
  return Promise.reject(err);
});

export default API;
