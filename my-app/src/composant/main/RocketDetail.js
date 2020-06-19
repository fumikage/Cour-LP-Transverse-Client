import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';

const GET_ROCKET = gql`
  query findRocketOfAstronaut($id: ID!) {
    findRocketOfAstronaut(_id: $id){
      _id
      name
      fuel
      location
    }
  }
`

function MyRocket({args, id}){

    const { loading, error, data} = useQuery(GET_ROCKET,{ 
      variables : {id: id}
    });
  if(data){
    console.log(data)
   
    return (
      <div>
        <h2 style={{"color":"white"}}>
          { data.findRocketOfAstronaut.name }
        </h2>
      </div>
    )
  }else{
    return false
    }
  }
  export default MyRocket;