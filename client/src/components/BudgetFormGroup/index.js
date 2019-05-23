import React, {Component} from 'react';
// import './style.css';

class FormGroup extends Component {
    constructor() { 
        super();

        this.state = {
            type: "Monthly Bill",
            value: "Monthly Amount",
            paydate: "Monthly Pay Date"
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
                {/* <label htmlFor="expenseType">Monthly Bill</label> */}
                <input name="type" className="form-control" value={this.state.type} onChange={this.handleInputChange}></input>
            </div>
            <div className="col">
                {/* <label htmlFor="expenseAmt">Monthly Amount</label> */}
                <input name="value" className="form-control" value={this.state.value} onChange={this.handleInputChange}></input>
            </div>
            <div className="col">
                {/* <label htmlFor="expensePayDate">Monthly Pay Date</label> */}
                <input name="paydate" className="form-control" value={this.state.paydate} onChange={this.handleInputChange}></input>
            </div>
            </div>
        </div>
    )
    }
} 

export default FormGroup;