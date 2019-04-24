import React, { Component } from 'react';
import CurrencyCalc from './../../CurrencyCalc';
import Calculator from './../../Calculator/Calculator';
import Calendar from 'react-calendar'
import { PieChart } from '@culturehq/charts';
import MapWidget from "./../../MapWidget"
import YVideo from "./../../YouTube"
import  '@culturehq/charts/dist/style.css';
import  './style.css';
const getRandomDatum = () => Math.floor(Math.random() * 100);

//random mock data - will be replaced by personalized stock data  pulled from database
const data = {
  EUR: getRandomDatum(),
  AAPL: getRandomDatum(),
  BP: getRandomDatum(),
  TSLA: getRandomDatum(),
  BTC: getRandomDatum()
};

export class Home extends Component {
  render() {
    return (
      <div className='container comtents'>
        <div className='row contents'>
          <div className='col-lg-4 col-md-6 col-sm-12 youtube'>
            <YVideo />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <PieChart data={data}/>
          </div>
          <div style={{height: 250}} className='col-lg-4 col-md-6 col-sm-12'>
            <Calculator />
          </div>
        </div>
        <div className='row contents2'>
          <div className='col-lg-4 col-md-6 col-sm-12 calendar'>
            <Calendar />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 map'>
            <MapWidget />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <CurrencyCalc />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
