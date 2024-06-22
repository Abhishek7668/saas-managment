import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    const location = useLocation();
    const id = location.state?.id || 'Guest'; // Default to 'Guest' if id is not present
    const [cart, setCart] = useState([]);

    const addToCart = (plan) => {
        setCart([...cart, plan]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const plans = [
        { name: 'Basic', price: 9.99, features: ['10 Users', '10GB Storage', 'Email Support', 'Help Center Access'] },
        { name: 'Standard', price: 19.99, features: ['50 Users', '50GB Storage', 'Priority Email Support', 'Help Center Access'] },
        { name: 'Premium', price: 29.99, features: ['Unlimited Users', '100GB Storage', 'Phone & Email Support', 'Help Center Access'] }
    ];

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h1>Welcome, {id}</h1>
                <p className="lead">Choose the plan that suits you best</p>
            </div>
            <div className="pricing-panel">
                <div className="row">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <div className={`card-header text-center card-header-${plan.name.toLowerCase()}`}>
                                    {plan.name}
                                </div>
                                <div className="card-body text-center">
                                    <h2 className="card-title">${plan.price.toFixed(2)}</h2>
                                    <p className="card-text">per month</p>
                                    <ul className="list-group list-group-flush">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="list-group-item">{feature}</li>
                                        ))}
                                    </ul>
                                    <button onClick={() => addToCart(plan)} className={`btn btn-${plan.name.toLowerCase()} mt-3`}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cart mt-5">
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.name} Plan - ${item.price.toFixed(2)}
                                <button onClick={() => removeFromCart(index)} className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Home;
