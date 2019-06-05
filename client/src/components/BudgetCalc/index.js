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
        netResult: 0,
        data: {},
        };

        this.updateIncomeValues = this.updateIncomeValues.bind(this);
        this.updateExpenseValues = this.updateExpenseValues.bind(this);
        this.pushIncome = this.pushIncome.bind(this);
        this.pushExpenses = this.pushExpenses.bind(this);
        this.deleteIncomeRow = this.deleteIncomeRow.bind(this);
        this.deleteExpenseRow = this.deleteExpenseRow.bind(this);
        this.calculateIncExpDiff = this.calculateIncExpDiff.bind(this);
    };

        componentWillMount() {
        this.getUserIncomes()
        this.getUserExpenses()
        console.log("Mounted!")
        }

        componentDidMount() {
            console.log(this.state)
            // this.calculateIncExpDiff()
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
                    }, () => {
                        this.calculateIncExpDiff()
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
                    }, () => {
                        this.calculateIncExpDiff()
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
                    }, () => {
                        this.calculateIncExpDiff();
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
                    }, () => {
                        this.calculateIncExpDiff(); 
                    })
            })
        }

        deleteIncomeRow(id) {
            axios.put("/api/budget/income/" +this.props.userId, {id:id}).then(response => {
                let incomeArr = response.data
                this.setState({
                    userIncomes: incomeArr
                }, () => {
                    this.calculateIncExpDiff();
                })
            })
        }

        deleteExpenseRow(id) {
            axios.put("/api/budget/expenses/" +this.props.userId, {id:id}).then(response => {
                let expenseArr = response.data
                this.setState({
                    userExpenses: expenseArr
                }, () => {
                    this.calculateIncExpDiff();
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

        calculateIncExpDiff() {
            var obj = {};
            var totalIncome = 0;
            var totalExpense = 0;
            var netResult = 0;
            this.state.userIncomes.forEach(item => {
                totalIncome += parseFloat(item.value)
            });
            this.state.userExpenses.forEach(item => {
                totalExpense += parseFloat(item.value)
                obj[item.type]=parseFloat(item.value)
            });
            netResult=totalIncome-totalExpense
            this.setState({
                sumIncomes: totalIncome,
                sumExpenses: totalExpense,
                netResult: netResult,   
                data: obj,         
            }, () => {
                console.log(this.state.data)
            })
        }

        render() {
            return (
                <div className="container">
                <div className="container shadow jumbotron contentBorder">
                    <div className="row text-center lilPadding"> 
                        <div className='col-8 contentBorder'>
                            <div className='col-12'>
                                <p>
                                {/* <h6>Incomes</h6> */}
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
                <hr />
                                <form>
                                    {this.state.incomeRows.map((row, index) => <FormIncome valueHandler={this.updateIncomeValues} number={index} key={index}/>)}
                                    <button id="submit" onClick={this.pushIncome}>Submit</button>  
                                </form>
                                </p>
                            </div>
                        </div>
                    
                        <div className='col-4'>
                           <b>Net Income:</b> {this.state.sumIncomes} <br />
                           <b>Net Expenses:</b> {this.state.sumExpenses} <br /><br />
                           <b>TOTAL DIFFERENCE:</b> {this.state.netResult}
                        </div>
                    
                    </div>

                    <div className="row text-center lilPadding">
                        <div className="col-8 contentBorder">
                            <div className='col-12'>
                                <p>
                                {/* <h6>Expenses</h6> */}
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
                    <hr />
                                <form>
                                    {this.state.expenseRows.map((row, index) => <FormGroup valueHandler={this.updateExpenseValues} number={index} key={index}/>)}
                                    <button id="submit2" onClick={this.pushExpenses}>Submit</button>  
                                </form>
                                </p>
                            </div>
                        </div>
                    
                        <div className='col-4'>
                            <PieChart data={this.state.data} />
                        </div>
                    </div>
                </div>

                    <br /><hr /><br />
                    
                </div>
            )
        }
        
}
export default BudgetCalc