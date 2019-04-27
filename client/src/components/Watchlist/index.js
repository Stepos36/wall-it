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
      }
      renderList() {
        axios.get("/api/watchlist/" + this.props.userId).then((response) => {
          this.setState({watchlist: response.data})
        })
      }
    
      componentDidMount() {
        axios.get("/api/watchlist/" + this.props.userId).then((response) => {
          this.setState({watchlist: response.data})
          console.log(response)
          this.getMarketData()
          setInterval(() => this.getMarketData(), 60000)
        })
      }
    
      getMarketData() {
          let symbols = []
          this.state.watchlist.forEach(item => {
              symbols.push(item.symbol)
          })
          let querySymbols = symbols.join()
          let query = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+querySymbols+
          '&api_token=Dvk9Bf1Qefk0H0z2th3l0Gge2ZafA8FvHjc1MRDhEmJSiffj3Lk0M85AihJ8'
        axios.get(query)
        .then(result => {
            console.log(result)
            this.setState({stockChanges: result.data.data})
            console.log(this.state.stockChanges)
        })
        }

      render() {
        return (
            <div className="row">
            <WatchListTableWrapper>
                <WatchListTableHeader />
                <WatchListTableBodyWrapper>
                    {this.state.stockChanges.map(watchitem => (
                        <WatchListTable data={watchitem} />
                    ))}
                </WatchListTableBodyWrapper>
            </WatchListTableWrapper>
          </div>
        )
      }
}

export default Watchlist
