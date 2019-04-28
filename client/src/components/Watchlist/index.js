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
          console.log(response)
          if (response.status === 204) {console.log("204")}
          else {
          this.setState({watchlist: response.data})
          console.log(response)
          this.getMarketData()
          setInterval(() => this.getMarketData(), 60000)
          }
        })
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
