import { Link } from 'react-router-dom';
export default function Sidebar(){
  return (
    <div style={{width:220, padding:16}}>
      <h2 style={{fontWeight:700, marginBottom:12}}>Lucky Admin</h2>
      <nav>
        <ul style={{listStyle:'none', padding:0}}>
          <li style={{marginBottom:8}}><Link to="/dashboard">Dashboard</Link></li>
          <li style={{marginBottom:8}}><Link to="/users">Users</Link></li>
          <li style={{marginBottom:8}}><Link to="/orders">Orders</Link></li>
          <li style={{marginBottom:8}}><Link to="/services">Services</Link></li>
        </ul>
      </nav>
    </div>
  )
}
