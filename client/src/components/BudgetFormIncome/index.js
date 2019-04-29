import React from 'react';
// import './style.css';

function FormIncome() {
    return(
        <div>
            <div class="row">
            <div class="col">
                <label for="incomeType">Income Type</label>
                <input type="incomeDesc" class="form-control" id="incomeDescription" placeholder="Salary"></input>
            </div>
            <div class="col">
                <label for="incomeAmt">Monthly Net Amount</label>
                <input type="netIncAmount" class="form-control" id="incomeAmount" placeholder="2000"></input>
            </div>
            </div>
        </div>
    )
} 

export default FormIncome;