import React, { Component } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import '../../style/App.css';

function HomePage (){
      return (
            <div class="container-fluid blue">
                   <img class="logo" src='/image/logRocke.png'/>
                   <p class="slogan1">ROCKET CLICKER</p>
                   <p class="slogan2">LAUNCH READY</p>
            </div>
           
          );
    }


export default HomePage;