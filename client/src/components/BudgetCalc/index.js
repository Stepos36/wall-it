import React, { Component } from 'react';
// import './style.css';
import FormGroup from '../BudgetFormGroup';
import '../../App.css';
import FormIncome from '../BudgetFormIncome';

class BudgetCalc extends Component {
    constructor() { 
        super();

        this.state = {
        incomeRows: [1],
        expenseRows: [1]
        };
    };

        componentDidMount() {
        console.log(this.props.userId)
        } 

        addIncomeRow(event) {
            event.preventDefault();
            this.state.incomeKey += 1
            var rowsIncome = [...this.state.incomeRows]
            rowsIncome.push(this.state.incomeKey)
            this.setState({incomeRows: rowsIncome})
        }

        addExpenseRow(event) {
            event.preventDefault();
            this.state.expenseKey += 1
            var rowsExpense = [...this.state.expenseRows]
            rowsExpense.push(this.state.expenseKey)
            this.setState({expenseRows: rowsExpense})
            console.log(this.state)
        }
        
        pushRows(event) {
            event.preventDefault();
            // push to the database function
        }

        deleteRow(event) {
            event.preventDefault();
            
        }

        updateIncomeValues(key, value) {
            console.log(key, value)
        }

        render() {
            return (
                <div className="contaianer">
                    <div className="row text-center">
                        <div className='col-12'>
                            <form>
                                {this.state.incomeRows.map((row, index) => <FormIncome valueHandler={this.updateIncomeValues} number={index}/>)}
                                <button id="submit" onClick={this.pushRows}>Submit</button>  
                                <button id="addBtn" onClick={(event) => this.addIncomeRow(event)}>Add another income source</button>
                            </form>
                        </div>
                        <div className='col-12'>
                            <form>
                                {this.state.expenseRows.map((row, index) => <FormGroup valueHandler={this.updateExpenseValues} number={index}/>)}
                                <button id="submit2" onClick={this.pushRows}>Submit</button>  
                                <button id="addBtn2" onClick={(event) => this.addExpenseRow(event)}>Add another bill</button>
                            </form>                            
                        </div>
                    </div>
                </div>  
            )
        }
        
}
export default BudgetCalc