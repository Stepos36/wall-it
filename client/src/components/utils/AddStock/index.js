import React, { Component } from 'react';

class AddStock extends Component {
  state = {
    symbol: this.props.symbol || "",
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
  
  submitAdd = (event) => {
    event.preventDefault();
    this.props.handler(this.state.symbol, this.state.quantity, this.state.price)
  }

  render() {
  return (
      <div>
      {this.props.holdingId === "new" ?
      <form> 
        <input type="text" name="symbol" value={this.state.symbol} onChange={this.handleInputChange} placeholder="Symbol"></input>
        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} placeholder="Quantity"></input>
        <input type="number" name="price" step="0.01" value={this.state.price} onChange={this.handleInputChange} placeholder="Price"></input>
        <button onClick={this.submitAdd}>Submit</button>
      </form>
      :
      <form>
      <input type="text" name="symbol" readOnly value={this.props.symbol}></input>
      <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} placeholder="Quantity"></input>
      <input type="number" name="price" step="0.01" value={this.state.price} onChange={this.handleInputChange} placeholder="Price"></input>
      <button onClick={this.submitAdd}>Submit</button>
      </form>
      }
      </div>
    );
}
}
export default AddStock;