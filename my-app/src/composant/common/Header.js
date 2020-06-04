import React, { Component } from "react";
import logo from "../../logo.svg";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            navbarOpen: true
        }

        this.toggleNavbar.bind(this);
    }

    toggleNavbar(){
        this.setState({
            navbarOpen: !this.state.navbarOpen
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="header">
                { this.state.navbarOpen && <div className="sidebar">
                    <h2>
                        Menu
                    </h2>
                    <ul className="sidebar-list">
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
                </div>}
                {/*<div onClick={() => this.toggleNavbar()}>*/}
                {/*    <FiMenu className="navbar-icon" />*/}
                {/*</div>*/}
                <div className="title-with-logo">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h2 className="header-title">Project App</h2>
                </div>
                <div>
                    <FaRegUserCircle className="navbar-icon" />
                </div>

            </div>
        );
    }
}

export default Header;