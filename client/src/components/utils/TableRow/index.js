import React from "react";

function TableRow(props) {
  return (
    <tr>
        <td>{props.symbol}</td>
        <td>{props.quantity}</td>
        <td>{props.cashflow}</td>
        <td><button className="lightshadow" onClick={() => {props.addStock("add", `${props.id}`, `${props.quantity}`, `${props.symbol}`)}}>Purchased More Shares</button></td>
        <td><button className="lightshadow" onClick={() => {props.reduceStock("reduce", `${props.id}`, `${props.quantity}`, `${props.symbol}`)}}>Sold Shares</button></td>
    </tr>
    );
}

export default TableRow;