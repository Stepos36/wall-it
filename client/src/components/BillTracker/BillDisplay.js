import React from 'react';

function BillDisplay(props) {
    return (
        <div>
            ${props.value} {props.name} due in {props.daysUntil} days.
        </div>
    )
}

export default BillDisplay;