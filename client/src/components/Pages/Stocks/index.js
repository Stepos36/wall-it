import React, { Component } from 'react';
import StockPage from './../../StockPage';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import axios from "axios";
import './style.css'

export class Stocks extends Component {
  state = {
    symbol: "AAPL"
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
};

  componentDidMount() {
    console.log(this.props.userId)
    axios.get("/api/stocks/" + this.props.userId, (response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <StockPage />
          <div className="container">
            <form>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Stock Lookup</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="symbol" value={this.state.symbol} onChange={this.handleInputChange}></input>
              </div>
            </div>
            </form>
          </div>
        <div className='widget'>
          <TradingViewWidget
            symbol={this.state.symbol}
            theme={Themes.DARK}
            locale="us"
            width='autosize'
            height='520'
          />
        </div>

      </div>
    )
  }
}

export default Stocks
