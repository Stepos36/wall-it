import React, { Component } from 'react'
import './style.css'


export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light sticky">
        <span className="navbar-brand h1">Wall-IT</span>
      </nav>
    )
  }
}

export default Header