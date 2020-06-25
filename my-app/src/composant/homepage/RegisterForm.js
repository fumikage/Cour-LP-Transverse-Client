import React, { Component } from 'react';
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";

const REGISTER_MUTATION = gql`
  mutation CreateAstronaut($name: String!, $surname: String!, $nationality: String!, $login: String!, $pass: String!, $rocketName: String!){
  createAstronaut(name: $name,  surname: $surname, nationality: $nationality, money:0, login: $login, password: $pass, rocketName: $rocketName){
      token
     astronaut {
    _id
    login
  }
}
}
`


function AddProject() {
    let name;
    let surname;
    let nationality;
    let login;
    let pass;
    let rocketName;
    const [register, { data }] =  useMutation(REGISTER_MUTATION);
    if(data){
      localStorage.setItem("tokensaved", data.createAstronaut.token);
      window.location.href = "/rocket";
    }
    

  
   
    return (
      <div class="container-fluid blue">
        <img class="logo" src='/image/logRocke.png'/>
        <form
          onSubmit={e => {
            e.preventDefault();
            register({ variables: { name: name.value, surname: surname.value, nationality: nationality.value, login: login.value, pass: pass.value, rocketName: rocketName.value } });
            name.value = '';
            surname.value = '';
            nationality.value = '';
            login.value = '';
            pass.value = '';
            rocketName.value = '';
           
          }}
        >
        <p class="login">Astronaut Name</p>
        <input
          ref={node => {
            name = node;
          }}
        />
        <p class="login">Astronaut Surname</p>
        <input
          ref={node => {
              surname = node;
          }}
        />
        <p class="login">Astronaut Nationality</p>
        <input
          ref={node => {
              nationality = node;
          }}
        />
        <p class="login">Astronaut Login</p>
        <input
          ref={node => {
              login = node;
          }}
        />
        <p class="login">Astronaut Password</p>
        <input type="password"
          ref={node => {
              pass = node;
          }}
        />
        <p class="login">Rocket Name</p>
        <input 
          ref={node => {
              rocketName = node;
          }}
        />
        <div>
        <button type="submit" class="btn buttonLogin">Register</button>
        </div>
        </form>
      </div>
    );
  }

class ProjetDetail extends Component {
  render() {
    return (
        <AddProject />

    );
  }
}

export default withRouter(ProjetDetail);