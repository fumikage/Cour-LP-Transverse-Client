import React, { Component } from 'react';
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import '../../style/App.css';

const LOGIN_MUTATION = gql`
  mutation login($mylogin: String!, $password: String!){
    login(login: $mylogin, password: $password){
      token
        astronaut {
          _id
          login
        }
      }
  }`;

  function LoginFunction(props) {
    let mylogin;
    let password;
    const [loginFunction, {data}]= useMutation(LOGIN_MUTATION);
    console.log(data)
    if(data){
      localStorage.setItem("tokensaved", data.login.token);
    
      window.location.href = "/rocket";
    }
    return (
      <div class="container-fluid blue">
        <img class="logo" src='/image/logRocke.png'/>
        <form
          onSubmit={e => {
            e.preventDefault();
            loginFunction({ variables: {mylogin: mylogin.value, password: password.value}});
            console.log(data);
            mylogin.value = '';
            password.value = '';
          }}
        >
    
          <p class="login">Astronaut Login</p>
          <input
            ref={node => {
              mylogin = node;
            }}
            />
            <p class="login">Astronaut Password</p>
            <input type="password"
                ref={node =>{
                password = node;
            }}/>
          
          <div>
              <button type="submit" class="btn buttonLogin" >Login</button>
            </div>
        </form>
       
      </div>
    );
  }


class Login extends Component {
 
  render() {
   console.log(this);
    return (
        
        <LoginFunction/>
    )
  }
  
}
function changeRoute(props, route) {
  console.log(props, route);
  props.history.push(route)
}

export default Login