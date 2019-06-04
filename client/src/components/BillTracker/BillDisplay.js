import React from 'react';

function BillDisplay(props) {
    return (
        <div>
           <h6> ${props.value} {props.name} due in {props.daysUntil} days. </h6>
        </div>
    )
}

export default BillDisplay;