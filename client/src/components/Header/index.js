import React, { Component } from 'react'
import logo from "./logo.png"
import './style.css'


export class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="navbar-brand h1"><img className="logo" src={logo}></img>
        </span>
      </nav>
    )
  }
}

export default Header

