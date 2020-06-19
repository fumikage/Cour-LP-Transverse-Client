import React, { Component } from 'react';
import '../../style/Rocket.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { Button } from 'react-bootstrap';
import {increment, reinitialize} from "../../actions";
import MyProgressBar from "./ProgressBar";
import { useQuery, useMutation } from '@apollo/react-hooks';

import RocketDetail from './RocketDetail';
import CurrentPlanet from './CurrentPlanet';
import ChangePlanet from './changePlanet';
import gql from 'graphql-tag';
const jwt = require ('jsonwebtoken');





class Rocket extends Component {
  constructor(props) {
    super(props)
    this.state = {bodyName: 'body-state1', time: {}, seconds: 15}
    this.timer = 0
    this.startTimer = this.startTimer.bind(this)
    this.countDown = this.countDown.bind(this)
    this.token = localStorage.getItem("tokensaved")
    this.Astronaut = jwt.decode(this.token)
    console.log(this.Astronaut);
    this.incrementFunc = this.setIncrement.bind(this);
  }
  
  setIncrement = (cost)=>{
      this.setState({incrvalue: cost})
  }

 
  

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        this.props.dispatch(reinitialize())
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        if (seconds <= 15 && seconds >= 10) {
            this.setState({bodyName: 'body-state2'});

        } else if (seconds <= 9 && seconds >= 5) {
            this.setState({bodyName: 'body-state21'});
        } else if (seconds <= 5 && seconds >= 4) {
            this.setState({bodyName: 'body-state31'});
        } else if (seconds === 0) {
            clearInterval(this.timer);
            this.timer = 0
            this.setState({
                seconds: 15
            })
        } else {
            this.setState({bodyName: 'body-state3'})
        }
    }

    

  restartLaunch(){
    
    
    this.setState ({bodyName: 'body-State1'});
    
    return 0;
  }
 
    render() {
      return (
        <div class="container-fluid">
          <div className={this.state.bodyName}>
           <div className="left">
            <div className="my-progress-bar">
              <p style={{"color":"white"}}>Fuel Bar</p>
            <MyProgressBar counter={this.props.counter}/> 
            </div>
            <div className="row" style={{"color":"white"}}>
              <div className="col align-self-center">
                <button type="image" className="button" 
                  onClick={() => {this.props.dispatch(increment(this.state.incrvalue))}} 
                  disabled={this.state.bodyName !== "body-state1" && this.state.bodyName !== "body-State1"}/>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                  <Button variant="secondary" onClick={this.startTimer} disabled={this.props.counter < 100 }>Launch</Button>{''}
                  <Button variant="secondary" onClick={this.restartLaunch.bind(this)} disabled={this.state.bodyName !== 'body-state3'}>Restart</Button>{''}
              </div>
            </div>
            <div class="row">
              <div class="col algin-self-center">
                <RocketDetail args={this.props} id={this.Astronaut.id}/>
                <CurrentPlanet id={this.Astronaut.id} incrementFunc={this.incrementFunc}/>
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
}


export default Rocket;