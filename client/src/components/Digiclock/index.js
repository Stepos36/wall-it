import React, { Component } from 'react';
import "./style.css"
import Clock from 'react-live-clock';

export class Digiclock extends Component {
  render() {
    return (
      <div className= "digiClock">
        <Clock 
        format={'h:mm:ssa'}
        ticking={true}
        timezone={this.props.timeZone}
        />
      </div>
    )
  }
}

export default Digiclock;


