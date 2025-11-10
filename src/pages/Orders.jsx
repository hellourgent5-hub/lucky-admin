import { useEffect, useState } from 'react';
import API from '../api/api';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Orders(){
  const [orders,setOrders] = useState([]);
  useEffect(()=>{API.get('/admin/orders').then(r=>setOrders(r.data)).catch(()=>{});},[]);

  return (
    <div style={{display:'flex'}} className="container">
      <Sidebar />
      <div style={{flex:1}}>
        <div className="header"><h1>Orders</h1><Navbar/></div>
        <div className="card">
          <table className="table">
            <thead><tr><th>Order ID</th><th>User</th><th>Total</th><th>Status</th></tr></thead>
            <tbody>
              {orders.map(o=> <tr key={o._id}><td>{o._id}</td><td>{o.user?.name||o.user}</td><td>₹{o.total}</td><td>{o.status}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
