import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {useState} from 'react';


const GET_PLANET = gql`
  query findPlanetSelected($id: ID!){
    findPlanetSelected(_id: $id){
        id
        name
        costDestination
        imagePlanet
    }
  }
`
const MOVE_PLANET = gql`
  mutation changePlanet($id: ID!){
    changePlanet(_id: $id){
        id
        name
        costDestination
        imagePlanet
    }
  }
`;
let bool = 0;
const Planet = ({id,state,setState,setIncrvalue}) =>{
  const { loading, error, data} = useQuery(GET_PLANET,{ 
    variables : {id: id}
  });
  
   if(data && bool === 0){
    setState(data.findPlanetSelected)
    setIncrvalue(data.findPlanetSelected.costDestination)
    bool = 1;
    console.log("yes")
   }
   if(data){

    return (
      <div>
        <p style={{"color":"white"}}>
          Prochaine planet à visiter: { state.name}
        </p>
        <img class="imgPlanet" src={ state.imagePlanet }/>
      </div>
    )
  
  }else{
    return false
  }
  
}



export default Planet;