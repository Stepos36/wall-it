import React, { Component } from 'react';
import axios from 'axios';
import BillDisplay from "./BillDisplay"

class BillTracker extends Component {
    constructor() {
        super()

        this.state = {
            bills: []
        }
    }

    componentDidMount() {
        axios.get("/api/budget/expenses/" + this.props.userId)
        .then(response => {
            if (response.status === 204) {}
            else {
            let date = new Date();
            let dateNum = date.getDate();
            let billsArr = response.data
            for (let i = 0; i < billsArr.length; i++) {
                if (parseInt(billsArr[i].paydate) > parseInt(dateNum)) {
                    let daysUntil = parseInt(billsArr[i].paydate) - parseInt(dateNum)
                    billsArr[i].daysUntil = daysUntil
                }
                else {
                    let month = date.getMonth()
                    let year = date.getFullYear()
                    let newMonth = month + 1;
                    let newYear = year;
                    if (month === 11) newYear += 1
                    let oneDay = 24*60*60*1000; 
                    let firstDate = new Date(year,month,dateNum);
                    let secondDate = new Date(newYear,newMonth,billsArr[i].paydate);
                    let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
                    billsArr[i].daysUntil = diffDays
                }
            }
            billsArr.sort(function(a, b) {
                return parseFloat(a.daysUntil) - parseFloat(b.daysUntil);
            });
            this.setState({bills: billsArr})
            }
        })
    }

    render() {
        return (
            <div className="container upcomingBills">
                <div><h4>Upcoming Bills</h4></div>
                {this.state.bills.map(bill => (
                    <BillDisplay 
                    name={bill.type}
                    value={bill.value}
                    paydate={bill.paydate}
                    daysUntil={bill.daysUntil}/>
                ))}
            </div>
        )
    }
} 

export default BillTracker;