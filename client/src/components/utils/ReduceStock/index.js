import React, { Component } from 'react';

class ReduceStock extends Component {
  state = {
    symbol: this.props.symbol,
    quantity: "",
    price: ""
  }
  
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
};
  
  submitReduce = (event) => {
    event.preventDefault();
    if (parseInt(this.state.quantity) > parseInt(this.props.quantity)) alert("Sold more than you owned? ERROR!")
    else {
    this.props.handler(this.state.symbol, this.state.quantity, this.state.price)
    }
  }

  render() {
  return (
      <div>
      <form>
      <input type="text" name="symbol" readOnly value={this.props.symbol}></input>
      <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} placeholder="Quantity"></input>
      <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} placeholder="Price"></input>
      <button className="lightshadow" onClick={this.submitReduce}>Submit</button>
      </form>
      </div>
    );
}
}
export default ReduceStock;