import React from 'react';
import './navbar.css';
// import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <h2>DASHBOARD</h2>
            </div>
            <div className="right">
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar
