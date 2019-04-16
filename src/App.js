import React, { Component } from 'react';
import ForexTicker from './components/ForexTicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <div className='col-md-3'></div>
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
