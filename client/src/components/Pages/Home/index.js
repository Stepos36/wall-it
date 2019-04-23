import React, { Component } from 'react';
import CurrencyCalc from './../../CurrencyCalc';
import Calculator from './../../Calculator/Calculator';

export class Home extends Component {
  render() {
    return (
      <div className='container comtents'>
        <div className='row contents'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <CurrencyCalc />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>

          </div>
          <div style={{height: 250}} className='col-lg-4 col-md-6 col-sm-12'>
            <Calculator />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
