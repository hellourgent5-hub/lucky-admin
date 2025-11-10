import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Protected({ children }){
  const token = localStorage.getItem("adminToken");
  if(!token) return <Navigate to="/" replace />;
  return children;
}

export default function App(){
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Protected><Dashboard/></Protected>} />
        <Route path="/users" element={<Protected><Users/></Protected>} />
        <Route path="/orders" element={<Protected><Orders/></Protected>} />
        <Route path="/services" element={<Protected><Services/></Protected>} />
      </Routes>
    </BrowserRouter>
  )
}
