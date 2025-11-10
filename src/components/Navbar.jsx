export default function Navbar(){
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };
  return (
    <div style={{display:'flex', justifyContent:'flex-end'}}>
      <button onClick={logout} className="btn">Logout</button>
    </div>
  )
}
