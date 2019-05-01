import React, { Component } from 'react'
import MortgageCalculator from "mortgage-calculator-react";
import axios from 'axios';
import Table from 'rc-table';
import './style.css';

export class Rates extends Component {

  state = {
    rates: {},

    columns: [
      {
        title: 'Product', dataIndex: 'product', key: 'product', width: 300,
      },
      {
        title: 'Interest Rate', dataIndex: 'interestRate', key: 'interestRate', width: 150,
      },
      {
        title: 'APR', dataIndex: 'apr', key: 'apr', width: 150,
      }],

    data: [],

    convertedRate: 0,

    updated: false
  };

  componentDidMount() {
    axios.get("/api/rates")
      .then(res => {
        const rates = res.data;
        console.log(rates);
        this.setState({

          data: [
            { product: rates[0].name, interestRate: rates[0].interestRate, apr: rates[0].apr, key: '1' },
            { product: rates[1].name, interestRate: rates[1].interestRate, apr: rates[1].apr, key: '2' },
            { product: rates[2].name, interestRate: rates[2].interestRate, apr: rates[2].apr, key: '3' },
            { product: rates[3].name, interestRate: rates[3].interestRate, apr: rates[3].apr, key: '4' },
            { product: rates[4].name, interestRate: rates[4].interestRate, apr: rates[4].apr, key: '5' },
            { product: rates[5].name, interestRate: rates[5].interestRate, apr: rates[5].apr, key: '6' }

          ],

          convertedRate: (parseInt(((rates[0].interestRate).split('%'))[0]) * .01),

          updated: true
        });
      })
  };


  render() {

    return (
      <div>
        <h1>Mortgage Rates</h1>
        <br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <h3 className='text-center'>Rates</h3>
              <Table columns={this.state.columns} data={this.state.data} className="jumbotron nopadding contentBorder shadow"/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <h3 className='text-center'>Mortgage Calculator</h3>
              <div className="shadow colorOverride"> 
              {this.state.updated ?
                <MortgageCalculator interestRate={this.state.convertedRate} /> :
                <p>Calculator Loading...</p>}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Rates