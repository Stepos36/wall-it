import React from "react";

function TableRow(props) {
  return (
    <tr>
        <td>{props.symbol}</td>
        <td>{props.quantity}</td>
        <td>{props.cashflow}</td>
        <td><button onClick={() => {props.addStock("add", `${props.id}`)}}>Purchased More Shares</button></td>
        <td><button onClick={() => {props.reduceStock("reduce", `${props.id}`)}}>Sold Shares</button></td>
    </tr>
    );
}

export default TableRow;