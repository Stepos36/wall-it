import React, { Component } from 'react';
import './style.css';
import FormGroup from '../BudgetFormGroup';
import '../../App.css';
import FormIncome from '../BudgetFormIncome';
import update from "immutability-helper";
import axios from "axios";
import BudgetIncomeTableRow from './BudgetIncomeTableRow';
import BudgetExpenseTableRow from './BudgetExpenseTableRow';
import { PieChart } from '@culturehq/charts';
import '@culturehq/charts/dist/style.css';

class BudgetCalc extends Component {
    constructor() { 
        super();

        this.state = {
        incomeRows: [{"type": "", "value": ""}],
        expenseRows: [{"type": "", "value": "", "paydate": ""}],
        userIncomes: [],
        userExpenses: [],
        sumIncomes: 0,
        sumExpenses: 0,
        };

        this.updateIncomeValues = this.updateIncomeValues.bind(this);
        this.updateExpenseValues = this.updateExpenseValues.bind(this);
        this.pushIncome = this.pushIncome.bind(this);
        this.pushExpenses = this.pushExpenses.bind(this);
        this.deleteIncomeRow = this.deleteIncomeRow.bind(this);
        this.deleteExpenseRow = this.deleteExpenseRow.bind(this);
    };

        componentDidMount() {
        this.getUserIncomes()
        this.getUserExpenses()
        console.log("Mounted!")
        }

        getUserIncomes() {
            axios.get("/api/budget/income/" + this.props.userId)
            .then(response => {
                if (response.status === 204) {
                    console.log("204")
                    console.log(response)
                }
                else {
                    let incomeArr = response.data
                    this.setState({
                        userIncomes: incomeArr
                    })
                }
            })
        }

        getUserExpenses() {
            axios.get("/api/budget/expenses/" + this.props.userId)
            .then(response => {
                if (response.status === 204) {
                    console.log("204")
                }
                else {
                    let expenseArr = response.data
                    this.setState({
                        userExpenses: expenseArr
                    })
                }
            })
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
            axios.post("/api/budget/income/" + this.props.userId, {data: this.state.incomeRows})
            .then(response => {
                console.log(response)
                let incomeArr = response.data
                    this.setState({
                        userIncomes: incomeArr
                    })
                
            })
        }

        pushExpenses(event) {
            event.preventDefault();
            axios.post("/api/budget/expenses/" + this.props.userId, {data: this.state.expenseRows})
            .then(response => {
                console.log(response)
                let expenseArr = response.data
                    this.setState({
                        userExpenses: expenseArr
                    })
            })
        }

        deleteIncomeRow(id) {
            axios.put("/api/budget/income/" +this.props.userId, {id:id}).then(response => {
                let incomeArr = response.data
                this.setState({
                    userIncomes: incomeArr
                })
            })
        }

        deleteExpenseRow(id) {
            axios.put("/api/budget/expenses/" +this.props.userId, {id:id}).then(response => {
                let expenseArr = response.data
                this.setState({
                    userExpenses: expenseArr
                })
            })            
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

        // difference() {
            
        //    }

        calculateIncExpDiff() {
            let totalIncome = 0;
            let totalExpense = 0;
            let netResult = 0;
            this.state.incomeArr.forEach(item => {
                totalIncome += item.value
            });
            this.state.expenseArr.forEach(item => {
                totalExpense += item.value
            });
            this.setState({netResult: this.state.totalIncome - this.state.totalExpense })
        }

        render() {
            return (
            <div>
                <div className="container">
                    <div className="row text-center"> 
                        <div className='col-8'>
                            <div className='col-12'>
                                <form>
                                    {this.state.incomeRows.map((row, index) => <FormIncome valueHandler={this.updateIncomeValues} number={index} key={index}/>)}
                                    <button id="submit" onClick={this.pushIncome}>Submit</button>  
                                    <button id="addBtn" onClick={(event) => this.addIncomeRow(event)}>Add another income source</button>
                                </form>
                            </div>
                        </div>
                    
                        <div className='col-4'>
                            Calculations here:
                        </div>
                    
                    </div>
                    
                    <div className="row text-center">
                        <div className="col-8">
                            <div className='col-12'>
                                <form>
                                    {this.state.expenseRows.map((row, index) => <FormGroup valueHandler={this.updateExpenseValues} number={index} key={index}/>)}
                                    <button id="submit2" onClick={this.pushExpenses}>Submit</button>  
                                    <button id="addBtn2" onClick={(event) => this.addExpenseRow(event)}>Add another bill</button>
                                </form>                            
                            </div>
                        </div>
                    
                        <div className='col-4'>
                            Combine with above 
                        </div>
                    </div>


                    <div className="container2 text-center">
                        <div className='row'>
                            <div className='col-8 jumbotron'>
                                <div className="row col-12 text-center">
                                    <div className="incomeHead container-fluid">
                                        <p className="text-center">
                                        Your Monthly Net Income
                                        </p>
                                    </div>
                                    <table className="table" id="incomeTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Description</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    {this.state.userIncomes.map((userIncome, key) => (
                                        <BudgetIncomeTableRow 
                                        type={userIncome.type}
                                        value={userIncome.value}
                                        remove={this.deleteIncomeRow}
                                        id={userIncome.id}
                                        key={userIncome.id}
                                        />
                                    ))}
                                    </tbody>
                                </table>
                                </div>
                            </div>

                            <div className='col-4'>
                                {/* <PieChart data={this.expenseArr} /> */}
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className='col-8 jumbotron'>
                                <div className="expenseHead container-fluid">
                                    <p className="text-center">
                                    Your Monthly Expenses
                                    </p>
                                </div>
                                <table className="table" id="expenseTable">
                                <thead>
                                    <tr>
                                        <th scope="col">Description</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Pay Date</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                {this.state.userExpenses.map((userExpense,key) => (
                                    <BudgetExpenseTableRow 
                                    type={userExpense.type}
                                    value={userExpense.value}
                                    paydate={userExpense.paydate}
                                    remove={this.deleteExpenseRow}
                                    id={userExpense.id}
                                    key={userExpense.id}
                                    />
                                ))}
                                </tbody>
                            </table>
                            </div>

                            <div className='col-4'>
                                Pie chart
                            </div>
                        </div>

                    </div>
                    
                    
                </div>  
            </div>
            )
        }
        
}
export default BudgetCalc