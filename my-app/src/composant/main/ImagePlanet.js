import React from 'react'
import '../../style/App.css';

function ImagePlanet({planet}){
    if(planet){
   const img =planet.imagePlanet;
   return (
       <img class="imgPlanet" src={img}/>
   )
    }
    return false
}

export default ImagePlanet;