import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="header">
            <h3 className="navbar-title">Articles</h3>
            <div className="navbar-container">
                <Link to="/" className="links">
                    HOME
                </Link>
                <Link to="/about" className="links">
                    ABOUT
                </Link>
                <Link to="/contact" className="links">
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
