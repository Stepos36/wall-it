import React, { Component } from 'react';

class AddCurrency extends Component {
    state = {
        purchased: "",
        sold: "",
        quantity: "",
        price: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    submitAdd = (event) => {
        event.preventDefault();
        this.props.handler(this.state.symbol, this.state.quantity, this.state.price)
    };

    render() {
        return (
            <div>
                {this.props.holdingId === "new" ?
                    <form>
                        <input type="text" name="purchased" value={this.state.purchased} onChange={this.handleInputChange} placeholder="Currency Purchased"></input>
                        <input type="text" name="sold" value={this.state.sold} onChange={this.handleInputChange} placeholder="Currency Sold"></input>
                        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} placeholder="Quantity"></input>
                        <input type="number" name="price" step="0.01" value={this.state.price} onChange={this.handleInputChange} placeholder="Price (In Sold Currency Units)"></input>
                        <button className="lightshadow" onClick={this.submitAdd}>Submit</button>
                    </form>
                    :
                    <form>
                        <input type="text" name="symbol" readOnly value={this.props.symbol}></input>
                        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} placeholder="Quantity"></input>
                        <input type="number" name="price" step="0.01" value={this.state.price} onChange={this.handleInputChange} placeholder="Price"></input>
                        <button className="lightshadow" onClick={this.submitAdd}>Submit</button>
                    </form>
                }
            </div>
        )
    }
}

export default AddCurrency;