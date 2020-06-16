import React, { Component } from 'react';
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

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
    if(data){
      localStorage.setItem("tokensaved", data.login.token);
      window.location.href = "/rocket";
    }
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            loginFunction({ variables: {mylogin: mylogin.value, password: password.value}});
            console.log(data);
            mylogin.value = '';
            password.value = '';
          }}
        >
          <p>Astronaut Login</p>
          <input
            ref={node => {
              mylogin = node;
            }}
            />
            <p>Astronaut Password</p>
            <input 
                ref={node =>{
                password = node;
            }}/>
            <div className="margin-v-m">
              <button type="submit" className="btn-primary">Login</button>
            </div>
        </form>
      </div>
    );
  }


class Login extends Component {
 
  render() {
   console.log(this);
    return (
      <div className="container">
        <h4>Login</h4>
        <LoginFunction/>
       </div>
      
    )
  }
  
}
function changeRoute(props, route) {
  console.log(props, route);
  props.history.push(route)
}

export default Login