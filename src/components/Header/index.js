import React, { Component } from 'react'
import './style.css'


export class Header extends Component {
  render() {
    return (
      <div>
        <div className= "container">
            <div className= "row">
                <div className="col-md-12">
                    <div className= "float-left date">Date/Time</div>
                    <div className= "text-center wallit">Wall-IT</div>
                </div>
            </div>       
        </div>
      </div>
    )
  }
}

export default Header
