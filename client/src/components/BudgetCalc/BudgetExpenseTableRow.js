import React from "react";

function BudgetExpenseTableRow(props) {
  return (
    <tr>
        <td>{props.type}</td>
        <td>{props.value}</td>
        <td>{props.paydate}</td>
        <button className="lightshadow" onClick={() => props.remove(props.id)}>-</button>
    </tr>
    );
}

export default BudgetExpenseTableRow;