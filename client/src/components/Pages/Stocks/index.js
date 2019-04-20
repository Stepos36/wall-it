import React, { Component } from 'react';
import StockPage from './../../StockPage';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './style.css'

export class Stocks extends Component {
  render() {
    return (
      <div>
        <StockPage />
        <div className='widget'>
          <TradingViewWidget
            symbol="NASDAQ:AAPL"
            theme={Themes.DARK}
            locale="fr"
            width='autosize'
            height='520'
          />
        </div>
      </div>
    )
  }
}

export default Stocks
