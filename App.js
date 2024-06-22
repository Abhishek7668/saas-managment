import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import User from './User'; 
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Assuming you have a Home component
import Admin from './Admin';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Admin" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
