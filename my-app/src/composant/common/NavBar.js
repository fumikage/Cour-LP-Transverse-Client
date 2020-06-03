import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/rocket">Rocket</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;