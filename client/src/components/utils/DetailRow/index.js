import React from "react";

function DetailRow(props) {
  return (
    <tr>
        <td>{props.date.substring(0,10)}</td>
        <td>{props.quantity}</td>
        <td>{props.price}</td>
    </tr>
    );
}

export default DetailRow;