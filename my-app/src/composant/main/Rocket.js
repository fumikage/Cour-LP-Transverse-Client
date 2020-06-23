import React, { Component, Suspense } from 'react';
import '../../style/Rocket.css';
import { Button } from 'react-bootstrap';
import MyProgressBar from "./ProgressBar";
import { useQuery, useMutation } from '@apollo/react-hooks';
import RocketDetail from './RocketDetail';
import CurrentPlanet from './CurrentPlanet';
import ImagePlanet from './ImagePlanet';
import ChangePlanet from './changePlanet';
import gql from 'graphql-tag';
import {useState} from 'react';
import Planet from './CurrentPlanet';
const jwt = require ('jsonwebtoken');



const Rocket = ({props}) => {
  
  const [counter, setCounter] = useState(0);
 
  const [timer, setTimer] = useState(0)
  const [seconds, setSeconds] = useState(15);
  const token = localStorage.getItem("tokensaved")
  const Astronaut = jwt.decode(token)
  const [planet, setPlanet] = useState({});
  const [incrvalue, setIncrvalue] = useState({});


  

  

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
  const [changePlanet, { loading, error, data}] =  useMutation(MOVE_PLANET)

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let second = Math.ceil(divisor_for_seconds);

    let obj = {
        "h": hours,
        "m": minutes,
        "s": second
    };
    return obj;
};


const clickCounter = () => {
  setCounter(counter => counter + 100/incrvalue);
}

const startTimer = () => {
    if (timer == 0 && seconds > 0) {
      timer = setInterval(countDown(), 1000);
    }
}

const countDown = () => {
    setSeconds(s => s -1)
}

const  restartLaunch  = async () => {
setSeconds(15)
setbodyName("body-State1")
setCounter(0)
setTimeout(() => setbodyName('body-state1'), 4000)
let currentPlanet = await changePlanet({ variables: { id: Astronaut.id } })

setPlanet(currentPlanet.data.changePlanet)
setIncrvalue(currentPlanet.data.changePlanet.costDestination)

return 0;
}

const [bodyName, setbodyName] = useState ('body-state1')

if (seconds <= 14 && seconds >= 10 && bodyName !== "body-state2") {
  setbodyName('body-state2')

} 
if (seconds <= 9 && seconds >= 5  && bodyName !== "body-state21") {
  setbodyName("body-state21");
} 
if (seconds <= 4 && seconds >= 3 && bodyName !== "body-state31") {
  setbodyName("body-state31");
} 
 if (seconds === 0) {
  clearInterval(timer);
} 
 if (seconds <=2 && seconds >= 0 && bodyName !== "body-state3"){
setbodyName("body-state3");
}
console.log(planet)
return (
  <div class="container-fluid">
    <div className={bodyName}>
     <div className="left">
      <div className="my-progress-bar">
        <p style={{"color":"white"}}>Fuel Bar</p>
      <MyProgressBar counter={counter} /> 
      </div>
      <div className="row" style={{"color":"white"}}>
        <div className="col align-self-center">
          <button type="image" className="button" 
            onClick={clickCounter} 
            disabled={bodyName !== "body-state1" && bodyName !== "body-State1" || counter >100}/>
        </div>
      </div>
      <div className="row">
        <div className="col align-self-center">
            <Button variant="secondary" onClick={() => {setTimer(setInterval(()=>{setSeconds(c=>c-1)},1000))}} disabled={counter < 100 }>Launch</Button>{''}
            <Button variant="secondary" onClick={restartLaunch} disabled={bodyName !== 'body-state3'}>Restart</Button>{''}
        </div>
      </div>
      <div class="row">
        <div class="col algin-self-center">
          <RocketDetail id={Astronaut.id}/>
          <CurrentPlanet id={Astronaut.id} state={planet} setState={setPlanet} onChange={planet} setIncrvalue={setIncrvalue}/>
  
         
          
        </div>
      </div>
    </div>

      <div className="right">
        <div className="completeDraw">
            <div className="rocket"/>
            <div className="ground"/>
        </div>
      </div>
    </div>
  </div>
);



}





export default Rocket;