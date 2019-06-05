import React from 'react';

function BillDisplay(props) {
    return (
        <tr>
           <td>${props.value}</td>
           <td>{props.name}</td>
           <td>Due in {props.daysUntil} days.</td>
        </tr>
    )
}

export default BillDisplay;