import { useEffect, useState } from 'react';
import API from '../api/api';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Dashboard(){
  const [stats,setStats] = useState({});

  useEffect(()=>{
    API.get('/admin/stats').then(r=>setStats(r.data)).catch(()=>{});
  },[]);

  return (
    <div style={{display:'flex'}} className="container">
      <Sidebar />
      <div style={{flex:1}}>
        <div className="header">
          <h1>Dashboard</h1>
          <Navbar />
        </div>
        <div className="card">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
            <div className="card">Users<br/><strong>{stats.users||0}</strong></div>
            <div className="card">Products<br/><strong>{stats.products||0}</strong></div>
            <div className="card">Orders<br/><strong>{stats.orders||0}</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}
