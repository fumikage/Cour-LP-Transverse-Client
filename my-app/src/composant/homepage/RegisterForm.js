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
      <div>
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
        <p>Astronaut Name</p>
        <input
          ref={node => {
            name = node;
          }}
        />
        <p>Astronaut Surname</p>
        <input
          ref={node => {
              surname = node;
          }}
        />
        <p>Astronaut Nationality</p>
        <input
          ref={node => {
              nationality = node;
          }}
        />
        <p>Astronaut Login</p>
        <input
          ref={node => {
              login = node;
          }}
        />
        <p>Astronaut Password</p>
        <input type="password"
          ref={node => {
              pass = node;
          }}
        />
        <p>Rocket Name</p>
        <input 
          ref={node => {
              rocketName = node;
          }}
        />
        <div className="margin-v-m">

        <button type="submit" className="btn-primary">Register</button>
        </div>
        </form>
      </div>
    );
  }

class ProjetDetail extends Component {
  render() {
    console.log(this);
    return (
      <div className="container">
        <h4>Create your Astronaut</h4>
        <AddProject />
      </div>
    );
  }
}

export default withRouter(ProjetDetail);