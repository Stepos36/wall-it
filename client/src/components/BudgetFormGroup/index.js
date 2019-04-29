import React from 'react';
// import './style.css';

function FormGroup() {
    return(
        <div>
            <div class="row">
            <div class="col">
                <label for="expenseType">Monthly Bill</label>
                <input type="description" class="form-control" id="description" placeholder="Chase Visa Credit Card Bill"></input>
            </div>
            <div class="col">
                <label for="expenseAmt">Monthly Amount</label>
                <input type="amount" class="form-control" id="amount" placeholder="100"></input>
            </div>
            <div class="col">
                <label for="expensePayDate">Monthly Pay Date</label>
                <input type="paydate" class="form-control" id="paydate" placeholder="25"></input>
            </div>
            </div>
        </div>
    )
} 

export default FormGroup;