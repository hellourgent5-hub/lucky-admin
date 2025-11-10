import { useState } from 'react';
import API from '../api/api';
import { toast } from 'react-toastify';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try{
      const { data } = await API.post('/admin/login', { email, password });
      localStorage.setItem('adminToken', data.token);
      toast.success('Logged in');
      window.location.href = '/dashboard';
    }catch(err){
      toast.error(err.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
      <form onSubmit={submit} className="card" style={{width:380}}>
        <h2>Admin Login</h2>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="block" style={{width:'100%', padding:8, marginBottom:8}} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} className="block" style={{width:'100%', padding:8, marginBottom:12}} />
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  )
}
