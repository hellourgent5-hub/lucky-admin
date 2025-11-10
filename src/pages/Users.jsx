import { useEffect, useState } from 'react';
import API from '../api/api';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{API.get('/admin/users').then(r=>setUsers(r.data)).catch(()=>{});},[]);

  return (
    <div style={{display:'flex'}} className="container">
      <Sidebar />
      <div style={{flex:1}}>
        <div className="header"><h1>Users</h1><Navbar/></div>
        <div className="card">
          <table className="table">
            <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
            <tbody>
              {users.map(u=> <tr key={u._id}><td>{u.name}</td><td>{u.email}</td><td>{u.role}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
