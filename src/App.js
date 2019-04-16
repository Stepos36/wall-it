import React, { Component } from 'react';
import ForexTicker from './components/ForexTicker'
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='row'>
          <div className='col-md-3'>
            <Navbar />
          </div>
          <div className='col-md-6'></div>
          <div className='col-md-3'>
            <ForexTicker />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
