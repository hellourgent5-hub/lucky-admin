import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ✅ Admin login
export const adminLogin = (data) => API.post("/admin/login", data);

// ✅ (Optional) Admin reset route
export const resetAdmin = () => API.get("/admin/reset-admin");
