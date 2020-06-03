import React, { Component } from 'react';
import '../../style/Rocket.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { Button } from 'react-bootstrap';







class SampleComponent extends Component {
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
    return 0;
  }
  //<Button variant="secondary" onClick={this.changeState.bind(this)}>Launch</Button>{''}
  //<button onClick={this.restartLaunch.bind(this)}></button>
    render() {
      return (
        <div clas="container-fluid">
          <div className={this.state.bodyName}>
           <div class="left">
            <div id="Completionist"></div>
            <div class="row">
             
            </div>
            <div class="row">
              <div class="col align-self-center">
                <button type="image" class="button"></button>
              </div>
            </div>
            <div class="row">
              <div class="col align-self-center">
                  <Button variant="secondary" onClick={this.changeState.bind(this)}>Launch</Button>{''}
                  <Button variant="secondary" onClick={this.restartLaunch.bind(this)}>Restart</Button>{''}
              </div>
            </div>
          </div>
      
        <div class="right">
          <div>
          
          </div>
          <div class="ground"></div>
          <div class="rocket"></div>
         
      
        </div>
      </div>
      </div>
    );
    }
}


export default SampleComponent;