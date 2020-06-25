import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/navbar.css";


import { bubble as Menu } from 'react-burger-menu'
class Header extends React.Component {
   
     
      render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        
        return (
        <div>
          <Menu>
            <Link to="/home" id="home" className="menu-item" href="/">Home</Link>
            <Link to="/login" id="about" className="menu-item" href="/about">Login</Link>
            <Link to="/register" id="contact" className="menu-item" href="/contact">Register</Link>
          
          </Menu>
        </div>
        );
      }
}

export default Header;