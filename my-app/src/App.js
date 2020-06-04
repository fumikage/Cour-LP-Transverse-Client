import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './style/App.css';
import HomePage from "./composant/homepage/HomePage";
import LoginForm from "./composant/homepage/LoginForm";
import RegisterForm from "./composant/homepage/RegisterForm";
import MainPage from "./composant/main/MainPage";
import Rocket from "./composant/main/Rocket";
import NavBar from "./composant/common/NavBar";
import Header from "./composant/common/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
  return (
    <div className="App">
        <Header/>
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
         <Rocket dispatch={dispatch} counter={counter}/>
       </Route>
      </Switch>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin/>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin/>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin/>
    <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
    
  );
}

export default App;
