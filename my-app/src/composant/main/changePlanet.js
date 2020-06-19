import React, { Component } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReactDOM from 'react-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const MOVE_PLANET = gql`
  mutation changePlanet($id: ID!){
    changePlanet(_id: $id){
        id
        name
        costDestination
    }
  }
`;


function ChangePlanet({id, bool}){
    const [changePlanet, { loading, error, data}] =  useMutation(MOVE_PLANET,{ 
    variables : {id: id}
  });
  return true;
}
  

export default ChangePlanet