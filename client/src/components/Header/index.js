import React, { Component } from 'react'

import Moment from 'react-moment';
import './style.css'


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="date">
                <Moment></Moment>
              </div>
              <div className="text-center wallit"><h3>Wall-IT</h3></div>
            </div>
            <div className="login">
                  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header