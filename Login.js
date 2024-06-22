import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      if (res.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User Not Signup");
      }
    } catch (error) {
      alert("Wrong Details");
      console.log(error);
    }
  }

  return (
    <div className="container">
      <form onSubmit={submit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        /><br /><br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        /><br /><br />
        <input type="submit" value="Login" /><br /><br />
        <p>If you don't have an account</p>
        <Link to="/Signup" className="link">Sign up</Link>
      </form>
    </div>
  );
}

export default Login;
