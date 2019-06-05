import React, { Component } from 'react';
import WatchListTable from './WatchListTable';
import WatchListTableHeader from './WatchListTableHeader';
import axios from "axios";
import "./style.css";
import WatchListTableWrapper from './WatchListTableWrapper';
import WatchListTableBodyWrapper from './WatchListTableBodyWrapper';

export class Watchlist extends Component {
    constructor() {
        super();
     
        this.state = {
          watchlist: [],
          stockChanges: []
        };
        this.removeListItem=this.removeListItem.bind(this);
        this.renderWatchList=this.renderWatchList.bind(this)
      }
      renderList() {
        axios.get("/api/watchlist/" + this.props.userId).then((response) => {
          this.setState({watchlist: response.data})
        })
      }
      
      renderWatchList() {
        axios.get("/api/watchlist/" + this.props.userId).then((response) => {
          if (response.status === 204) {console.log("204")}
          else {
          this.setState({watchlist: response.data})
          this.getMarketData()
          }
        })
      }

      componentDidMount() {
        this.renderWatchList()
      }
    
      getMarketData() {
          let symbols = []
          this.state.watchlist.forEach(item => {
              symbols.push(item.symbol)
          })
          let querySymbols = symbols.join()
          axios.post("/tradingdata", {symbols: querySymbols})
            .then(response => {
              this.setState({stockChanges: response.data.data})
            })
        }
      
      

      removeListItem(symbol) {
        axios.put('/api/watchlist/'+this.props.userId, {symbol: symbol})
        .then(response => {
          this.renderWatchList()
        })
      }

      render() {
        return (
            <div className="row watchListTable shadow-left">
            <WatchListTableWrapper>
                <WatchListTableHeader render={this.renderWatchList}/>
                <WatchListTableBodyWrapper>
                    {this.state.stockChanges.map(watchitem => (
                        <WatchListTable remove={this.removeListItem} data={watchitem} />
                    ))}
                </WatchListTableBodyWrapper>
            </WatchListTableWrapper>
          </div>
        )
      }
}

export default Watchlist