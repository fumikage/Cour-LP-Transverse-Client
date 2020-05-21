import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from "./composant/homepage/HomePage";
import LoginForm from "./composant/homepage/LoginForm";
import RegisterForm from "./composant/homepage/RegisterForm";
import MainPage from "./composant/main/MainPage";

function App() {
  return (
    <div className="App">
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
        </ul>
      </nav>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
       <Route path="/login">
         <LoginForm />
       </Route>
       <Route path="/register">
         <RegisterForm />
       </Route>
       <Route path="astronaut/:id">
         <MainPage />
       </Route>
      </Switch>
    </div>
  );
}

export default App;
