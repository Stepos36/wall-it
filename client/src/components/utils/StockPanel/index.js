import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import StockArticle from "./../StockArticle";
import axios from "axios";
import './style.css'

class StockPanel extends Component {
  constructor() {
    super();

  this.state = {
    symbol: "AAPL",
    stockExpand: false,
    expandedSymbol: "",
    expandedName: "",
    expandedStories: [],
    watchListBtn: 'Add To Watchlist',
    showHide : 'Show more'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.moreInfo = this.moreInfo.bind(this);
    this.addWatchlist = this.addWatchlist.bind(this);
  }

  handleInputChange(event) {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
};

  moreInfo(event) {
    if (this.state.stockExpand) {
      event.preventDefault();
      this.setState({stockExpand: false, showHide: 'Show more'})

    }
    else {
      event.preventDefault();
      let infoObj = {}
      let namePromise = axios.post("/tradingdata", {symbols: this.state.symbol})
      .then(info => {
        infoObj.name = info.data.data[0].name
        infoObj.symbol = info.data.data[0].symbol
      })
      let newsPromise = axios.get("https://stocknewsapi.com/api/v1?tickers=" + this.state.symbol + "&items=5&fallback=true&token=kx8zq9u0n7gn3qgrtd5hev8rozl4f7nsjdjsplxm")
      .then(response => {
          infoObj.stories = response.data.data
      })
      Promise.all([namePromise, newsPromise]).then(() => {
        this.setState({
          stockExpand: true,
          expandedSymbol: infoObj.symbol,
          expandedName: infoObj.name,
          expandedStories: infoObj.stories,
          watchListBtn: 'Add To Watchlist',
          showHide: 'Hide'
        })
      })
    }
  }

  addWatchlist(event) {
    event.preventDefault();
    console.log(this.props.userId)
    axios.post("/api/watchlist/" + this.props.userId, {symbol: this.state.expandedSymbol})
    .then(response => {
      console.log(response)
    })
    this.setState({watchListBtn: 'Stock Added to Watchlist'})
  }

  render() {
      return (
        <div>
          <div className="container">
            <form>
            <div className="form-group row">
              <label htmlFor="symbol" className="col-sm-2 col-form-label">Stock Lookup</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" name="symbol" value={this.state.symbol} onChange={this.handleInputChange}></input>
              </div>
              <div className="col-sm-3 buttonsMoreHide">
                <button className="lightshadow" onClick={this.moreInfo}>{this.state.showHide}</button>
              </div>
              </div>
              </form>
              <div className="row">
                <div className="col-sm-12">
                  <div className="container">
                    <div className={this.state.stockExpand ? "" : "d-none"}>
                      <div className="jumbotron text-center shadow">
                        <h3 id="expandName">{this.state.expandedName}</h3>
                        <button onClick={this.addWatchlist} id="watchBtn" className="lightshadow float-right">{this.state.watchListBtn}</button>
                        <ul className="list-group">
                        {this.state.expandedStories.map(story => (
                          <StockArticle url={story.news_url} text={story.text} key={story.text}/>
                        ))}
                        </ul>
                      </div>
                      <div className='widget'>
                        <TradingViewWidget
                          allow_symbol_change="true"
                          symbol={this.state.symbol}
                          theme={Themes.DARK}
                          locale="us"
                          width='autosize'
                          height='520'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
  }

}

export default StockPanel;