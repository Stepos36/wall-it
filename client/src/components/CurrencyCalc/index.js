import React, { Component } from "react";
import axios from "axios";

import './style.css';

class Converter extends Component {
    state = {
        result: null,
        fromCurrency: "USD",
        toCurrency: "EUR",
        amount: 1,
        currencies: [],
    };

    // Initializes the currencies with values from the api
    componentDidMount() {
        axios
            .get("https://api.openrates.io/latest")
            .then(response => {
                // Initialized with 'EUR' because the base currency is 'EUR'
                // and it is not included in the response
                const currencyAr = ["EUR"]
                for (const key in response.data.rates) {
                    currencyAr.push(key)
                }
                this.setState({ currencies: currencyAr.sort() })
            })
            .catch(err => {
                console.log("Opps", err.message);
            });
    }

    switchSpots() {
        var transit = this.state.fromCurrency
        this.setState({fromCurrency: this.state.toCurrency, toCurrency: transit})
        setTimeout(this.convertHandler, 100)
    }
    // Event handler for the conversion
    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(`https://api.openrates.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
                .then(response => {
                    const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
                    this.setState({ result: result.toFixed(5) })
                })
                .catch(err => {
                    console.log("Opps", err.message);
                });
        } else {
            this.setState({ result: "You cant convert the same currency!" })
        }
    };

    // Updates the states based on the dropdown that was changed
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
            this.convertHandler()
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
            setTimeout(this.convertHandler, 100)
        }
    }

    render() {
        return (
            <div className="Converter">
                <h5><span>Currency </span> Converter <span role="img" aria-label="money">&#x1f4b5;</span> </h5>
                <div className="Form">
                    <input
                        name="amount"
                        type="text"
                        value={this.state.amount}
                        onChange={event => {
                            this.setState({ amount: event.target.value })
                            this.convertHandler()
                        }
                        }
                    />
                    <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <span>
                        <button 
                        onClick = {(event) => this.switchSpots(event)}
                        className='btn'
                        >↔
                        </button>
                    </span>
                    <select
                        name="to"
                        onChange={(event) => {
                            this.selectHandler(event)
                        }}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                </div>
                {this.state.result && 
                    <h4>{this.state.result}</h4>
                }
            </div>
        );
    }
}

export default Converter;