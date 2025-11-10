import { useEffect, useState } from 'react';
import API from '../api/api';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Services(){
  const [products,setProducts] = useState([]);
  useEffect(()=>{API.get('/products').then(r=>setProducts(r.data)).catch(()=>{});},[]);

  return (
    <div style={{display:'flex'}} className="container">
      <Sidebar />
      <div style={{flex:1}}>
        <div className="header"><h1>Services / Products</h1><Navbar/></div>
        <div className="card">
          <table className="table">
            <thead><tr><th>Title</th><th>Price</th><th>Vendor</th></tr></thead>
            <tbody>
              {products.map(p=> <tr key={p._id}><td>{p.title}</td><td>₹{p.price}</td><td>{p.vendor?.name||p.vendor}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
