import React, { Component } from 'react'
import MortgageCalculator from "mortgage-calculator-react";
import axios from 'axios';


export class Rates extends Component {

  state = {
    rates: {}
  };

  componentDidMount() {
    axios.get("/api/rates")
      .then(res => {
        const rates = res.data;
        console.log(rates);
        this.setState({ rates });
      })
  };

  render() {
    return (
      <div>
        <h1>Mortgage Rates</h1>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <MortgageCalculator />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ul>
            {/* {this.state.rates.map(rates => <li>{rates}</li>)} */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Rates