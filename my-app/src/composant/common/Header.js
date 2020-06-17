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
        </div>
        );
      }
}

export default Header;