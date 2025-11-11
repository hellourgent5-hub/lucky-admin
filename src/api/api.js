import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// ✅ Admin login function
export const adminLogin = (data) => API.post("/admin/login", data);

// ✅ (Optional) Admin reset route
export const resetAdmin = () => API.get("/admin/reset-admin");

// ✅ Default export (this line fixes your build)
export default API;
