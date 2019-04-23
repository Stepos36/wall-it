import React, { Component } from 'react';
import CurrencyCalc from './../../CurrencyCalc'

export class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <CurrencyCalc />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
