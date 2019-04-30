import React, { Component } from 'react'

export class WatchListTableHeader extends Component {
  render() {
    return (
      <thead>
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
