// src/components/Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { useNavigate } from 'react-router-dom';
import './walaa.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const role = username === 'seller' ? 'seller' : 'customer';
    dispatch(login({ username, role }));
    navigate(role === 'seller' ? '/dashboard' : '/product');
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
