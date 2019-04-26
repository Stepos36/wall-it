import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import StockArticle from "./../StockArticle";
import axios from "axios";

class StockPanel extends Component {
  constructor(props) {
    super(props);

  this.state = {
    symbol: "AAPL",
    stockExpand: false,
    expandedName: "",
    expandedStories: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.moreInfo = this.moreInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
  }

  handleInputChange(event) {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
};

  moreInfo(event) {
    event.preventDefault();
    let infoObj = {}
    let namePromise = axios.get("https://www.worldtradingdata.com/api/v1/stock?symbol=" + this.state.symbol + "&api_token=Dvk9Bf1Qefk0H0z2th3l0Gge2ZafA8FvHjc1MRDhEmJSiffj3Lk0M85AihJ8")
    .then(info => {
      console.log(info)
      infoObj.name = info.data.data[0].name
    })
    let newsPromise = axios.get("https://stocknewsapi.com/api/v1?tickers=" + this.state.symbol + "&items=5&fallback=true&token=8mh1wqbeonbi6qxwwhvhpaibaji5grdrtbwe7rxu")
    .then(response => {
        console.log(response)
        infoObj.stories = response.data.data
    })
    Promise.all([namePromise, newsPromise]).then(() => {
      this.setState({
        stockExpand: true,
        expandedName: infoObj.name,
        expandedStories: infoObj.stories
      })
      console.log(this.state)
    })
  }

  hideInfo(event) {
    event.preventDefault();
    this.setState({stockExpand: false})
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
              <div className="col-sm-3">
                <button onClick={this.moreInfo}>More Info</button>
                <button onClick={this.hideInfo}>Hide Info</button>
              </div>
              </div>
              </form>
              <div className="row">
                <div className="col-sm-12">
                  <div className="container">
                    <div className={this.state.stockExpand ? "" : "d-none"}>
                      <div className="jumbotron text-center">
                        <h3>{this.state.expandedName}</h3>
                        <ul className="list-group">
                        {this.state.expandedStories.map(story => (
                          <StockArticle url={story.news_url} text={story.text} key={story.text}/>
                        ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
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
      )
  }

}

export default StockPanel;