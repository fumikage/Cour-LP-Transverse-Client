import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './style/App.css';
import HomePage from "./composant/homepage/HomePage";
import LoginForm from "./composant/homepage/LoginForm";
import RegisterForm from "./composant/homepage/RegisterForm";
import MainPage from "./composant/main/MainPage";
import Rocket from "./composant/main/Rocket";
import 'bootstrap/dist/css/bootstrap.min.css';



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
          <li>
            <Link to="/rocket">Rocket</Link>
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
       <Route path="/rocket">
         <Rocket />
       </Route>
      </Switch>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
    
  );
}

export default App;
