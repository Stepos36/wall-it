import React, { Component } from 'react';
import './style.css'

function WatchListTable(props) {
    return (
      <tr>
          <td>
          {props.data.symbol}
          </td>
          <td>
          ${props.data.price}
          </td>
          <td>
          {props.data.change_pct}%
          </td>
          <td>
          <button className="lightshadow" onClick={() => props.remove(props.data.symbol)}>-</button>
          </td>
      </tr>
    )
}

export default WatchListTable
