import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/Admin', {
        email,
        password,
      });

      if (res.data === "exist") {
        alert("User Already exists");
      } else if (res.data === "notexist") {
        navigate("/Home", { state: { id: email } });
      } 
    } catch (error) {
      alert("Wrong Details");
      console.log(error);
    }
  };

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
        <input type="submit" value="Submit" /><br /><br />
        <Link to="/" className="link">Login Page</Link><br />
      </form>
    </div>
  );
}

export default Admin;
