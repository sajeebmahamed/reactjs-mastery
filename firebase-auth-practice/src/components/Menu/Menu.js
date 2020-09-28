import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/shipment">Shipment</Link> </li>
                    <li> <Link to="/admin">Admin</Link> </li>
                    <li> <Link to="/blog">Blog</Link> </li>
                    <li> <Link to="/dashboard">Dashboard</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Menu;