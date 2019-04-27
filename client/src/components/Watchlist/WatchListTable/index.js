import React, { Component } from 'react'

function WatchListTable(props) {
    return (
      <tr>
          <td>
          {props.data.symbol}
          </td>
          <td>
          {props.data.day_change}
          </td>
      </tr>
    )
}

export default WatchListTable
