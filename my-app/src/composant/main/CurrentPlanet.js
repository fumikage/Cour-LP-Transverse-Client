import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';



const GET_PLANET = gql`
  query findPlanetSelected($id: ID!){
    findPlanetSelected(_id: $id){
        id
        name
        costDestination
    }
  }
`

function Planet({id}){
  const { loading, error, data} = useQuery(GET_PLANET,{ 
    variables : {id: id}
  });
  
   if(data){
    return (
      <div>
        <p style={{"color":"white"}}>
          Prochaine planet à visiter: { data.findPlanetSelected.name}
        </p>
      </div>
    )
  }else{
    return false
  }
  
}



export default Planet;