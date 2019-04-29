import React, { Component } from 'react';
// import './style.css';

class FormIncome extends Component {
    constructor() { 
        super();

        this.state = {
            type: "Salary",
            value: "2000"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({[name]: value}, () => {
            this.props.valueHandler(this.props.number, this.state)
        })
    };
    

    render() {
    return(
        <div>
            <div className="row">
            <div className="col">
                <label htmlFor="incomeType">Income Type</label>
                <input type="incomeDesc" className="form-control" name="type" value={this.state.type} onChange={this.handleInputChange}></input>
            </div>
            <div className="col">
                <label htmlFor="incomeAmt">Monthly Net Amount</label>
                <input type="netIncAmount" className="form-control" name="value" value={this.state.value} onChange={this.handleInputChange}></input>
            </div>
            </div>
        </div>
    )
    }
} 

export default FormIncome;