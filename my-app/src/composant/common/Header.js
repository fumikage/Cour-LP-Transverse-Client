import React, { Component } from "react";
import logo from "../../logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../style/navbar.css";
import {AUTH_TOKEN } from "../../constants";

import { bubble as Menu } from 'react-burger-menu'
class Header extends React.Component {
   
     
      render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
        <div>
          <Menu>
            <Link to="/home" id="home" className="menu-item" href="/">Home</Link>
            <Link to="/login" id="about" className="menu-item" href="/about">Login</Link>
            <Link to="/register" id="contact" className="menu-item" href="/contact">Register</Link>
            <Link to="/rocket" className="menu-item--small" href="">Rocket</Link>
          </Menu>
            <div class="row">
                <div class="col-lg-2">
                    <img src={logo} className="app-logo" alt="logo" />
                </div>
                <div class="col-lg-4">
                    <h2 className="header-title">Project App</h2>
                </div>
                <div class="col-lg-4">
                    <FaRegUserCircle className="navbar-icon" />
                </div>
            </div>
        </div>
        );
      }
}

export default Header;