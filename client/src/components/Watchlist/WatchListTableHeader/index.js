import React, { Component } from 'react';
import './style.css'

export class WatchListTableHeader extends Component {
  render() {
    return (
      <thead className="tableHead">
        <tr>
          <th>Stock Symbol</th>
          <th>Current price</th>
          <th>Today’s Change</th>
          <th><button className="lightshadow" onClick={this.props.render}>⟲</button></th>
        </tr>
      </thead>
    )
  }
}

export default WatchListTableHeader
