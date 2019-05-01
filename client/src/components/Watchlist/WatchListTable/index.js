import React, { Component } from 'react';
import './style.css'

function WatchListTable(props) {
    return (
      <tr className={props.data.change_pct > 0 ? 'greenStock' : 'redStock'}>
          <td>
          {props.data.symbol}
          </td>
          <td>
          ${props.data.price}
          </td>
          <td>
          {props.data.change_pct > 0 ? "+" : ""}{props.data.change_pct}%
          </td>
          <td>
          <button className="lightshadow" onClick={() => props.remove(props.data.symbol)}>-</button>
          </td>
      </tr>
    )
}

export default WatchListTable
