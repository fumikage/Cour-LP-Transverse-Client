import React, { Component } from 'react';
import '../../style/Rocket.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { Button } from 'react-bootstrap';
import {increment, decrement, reinitialize} from "../../actions";
import MyProgressBar from "./ProgressBar";


class Rocket extends Component {
  constructor(props) {
    super(props);
    this.state = {bodyName: 'body-name1'};
  }

  changeState(){

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (seconds <= 8 && seconds >=5){
        this.setState({bodyName:'body-state2'});
        return <span>{seconds}</span>
      } else if( seconds <=4 && seconds >=1){
        this.setState({bodyName:'body-state21'});
        return <span>{seconds}</span>
      }else if (seconds === 0){
        this.setState({bodyName:'body-state3'});
        this.props.dispatch(reinitialize());
    }
      else if(!completed){
        this.setState ({bodyName:'body-state1'});
        return <span>{seconds}</span>;
      }
    };
   
  ReactDOM.render(
    (
      <Countdown date={Date.now() + 10000}
        renderer={renderer} />
    ),
    document.getElementById('Completionist'));
  };
  restartLaunch(){
    this.setState ({bodyName: 'body-State1'});
    this.props.dispatch(reinitialize());
    return 0;
  }
  //<Button variant="secondary" onClick={this.changeState.bind(this)}>Launch</Button>{''}
  //<button onClick={this.restartLaunch.bind(this)}></button>
    render() {
      return (
        <div className="container-fluid">
          <div className={this.state.bodyName}>
           <div className="left">
               <div id="Completionist"/>
            <div className="my-progress-bar">
            <MyProgressBar counter={this.props.counter}/>
            </div>
            <div className="row">
      
              <div className="col align-self-center">
                    <div id="countFuel">{this.state.fuel}</div>
                <button type="image" className="button" onClick={() => {this.props.dispatch(increment())}}></button>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                  <Button variant="secondary" onClick={this.changeState.bind(this)} disabled={this.props.counter < 100 }>Launch</Button>{''}
                  <Button variant="secondary" onClick={this.restartLaunch.bind(this)}>Restart</Button>{''}
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