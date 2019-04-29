import React, { Component } from 'react';
// import './style.css';
import FormGroup from '../BudgetFormGroup';
import '../../App.css';
import FormIncome from '../BudgetFormIncome';
import update from "immutability-helper";
import axios from "axios";

class BudgetCalc extends Component {
    constructor() { 
        super();

        this.state = {
        incomeRows: [{"type": "", "value": ""}],
        expenseRows: [{"type": "", "value": "", "paydate": ""}]
        };

        this.updateIncomeValues = this.updateIncomeValues.bind(this);
        this.updateExpenseValues = this.updateExpenseValues.bind(this);
        this.pushIncome = this.pushIncome.bind(this);
        this.pushExpenses = this.pushExpenses.bind(this);
    };

        componentDidMount() {
        console.log(this.props.userId)
        } 

        addIncomeRow(event) {
            event.preventDefault();
            var rowsIncome = [...this.state.incomeRows]
            rowsIncome.push(this.state.incomeKey)
            this.setState({incomeRows: rowsIncome})
        }

        addExpenseRow(event) {
            event.preventDefault();
            var rowsExpense = [...this.state.expenseRows]
            rowsExpense.push(this.state.expenseKey)
            this.setState({expenseRows: rowsExpense})
            console.log(this.state)
        }
        
        pushIncome(event) {
            event.preventDefault();
            console.log(this.props.userId)
            // push to the database function
            axios.post("/api/budget/income/" + this.props.userId, {data: this.state.incomeRows})
            .then(response => {
                console.log(response)
            })
        }

        pushExpenses(event) {
            event.preventDefault();
            axios.post("/api/budget/expenses/" + this.props.userId, {data: this.state.expenseRows})
            .then(response => {
                console.log(response)
            })
        }

        deleteRow(event) {
            event.preventDefault();
            
        }

        updateIncomeValues(key, value) {
            this.setState({
                incomeRows: update(this.state.incomeRows, {[key]: {$set: value}})
            })
        }

        updateExpenseValues(key, value) {
            this.setState({
                expenseRows: update(this.state.expenseRows, {[key]: {$set: value}})
            })
        }

        render() {
            return (
                <div className="contaianer">
                    <div className="row text-center">
                        <div className='col-12'>
                            <form>
                                {this.state.incomeRows.map((row, index) => <FormIncome valueHandler={this.updateIncomeValues} number={index} key={index}/>)}
                                <button id="submit" onClick={this.pushIncome}>Submit</button>  
                                <button id="addBtn" onClick={(event) => this.addIncomeRow(event)}>Add another income source</button>
                            </form>
                        </div>
                        <div className='col-12'>
                            <form>
                                {this.state.expenseRows.map((row, index) => <FormGroup valueHandler={this.updateExpenseValues} number={index} key={index}/>)}
                                <button id="submit2" onClick={this.pushExpenses}>Submit</button>  
                                <button id="addBtn2" onClick={(event) => this.addExpenseRow(event)}>Add another bill</button>
                            </form>                            
                        </div>
                    </div>
                </div>  
            )
        }
        
}
export default BudgetCalc