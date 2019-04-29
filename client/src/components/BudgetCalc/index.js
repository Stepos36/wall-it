import React, { Component } from 'react';
// import './style.css';
import FormGroup from '../BudgetFormGroup';
import '../../App.css';
import FormIncome from '../BudgetFormIncome';

class BudgetCalc extends Component {
    constructor() { 
        super();

        this.state = {
        rows: ['row1']
        };
    };

        componentDidMount() {
        console.log(this.props.userId)
        } 

        addIncomeRow(event) {
            event.preventDefault();
            console.log(this)
            var rowsIncome = [...this.state.rows]
            rowsIncome.push('newRow')
            this.setState({rows: rowsIncome})
        }

        addExpenseRow(event) {
            event.preventDefault();
            console.log(this)
            var rowsExpense = [...this.state.rows]
            rowsExpense.push('newRow2')
            this.setState({rows: rowsExpense})
        }
        
        pushRows(event) {
            event.preventDefault();
            // push to the database function
        }

        deleteRow(event) {
            event.preventDefault();
            
        }

        render() {
            return (
                <div className="contaianer">
                    <div className="row text-center">
                        <div className='col-12'>
                            <form>
                                {this.state.rows.map(row => <FormIncome/>)}
                                <button id="submit" onClick={this.pushRows}>Submit</button>  
                                <button id="addBtn" onClick={(event) => this.addIncomeRow(event)}>Add another income source</button>
                            </form>
                        </div>
                        <div className='col-12'>
                            <form>
                                {this.state.rows.map(row => <FormGroup/>)}
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