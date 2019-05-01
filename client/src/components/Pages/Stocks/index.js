import React, { Component } from 'react';
import StockPage from './../../StockPage';
import StockPanel from "./../../utils/StockPanel";
import TableRow from "./../../utils/TableRow";
import AddStock from "./../../utils/AddStock";
import ReduceStock from "./../../utils/ReduceStock";
import Modal from 'react-modal';
import axios from "axios";
import './style.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

export class Stocks extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false,
      transactionType: "",
      holdingId: "",
      quantity: "",
      selectedSymbol: "",
      stocks: []
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
    this.rerenderTable = this.rerenderTable.bind(this);
  }

  openModal(type, id, quantity, symbol) {
    this.setState({
      modalIsOpen: true,
      transactionType: type,
      holdingId: id,
      quantity: quantity,
      selectedSymbol: symbol
    });
    console.log(symbol)
  }

  handleAdd(symbol, quantity, price) {
    console.log(symbol, quantity, price)
    axios.post("/api/stocks/" + this.props.userId, {
      symbol: symbol,
      quantity: quantity,
      price: price
    }).then(response => {
      console.log(response)
      this.setState({modalIsOpen: false});
      this.rerenderTable();
    })
  }

  handleReduce(symbol, quantity, price) {
    console.log(symbol, quantity, price)
    axios.put("/api/stocks/" + this.props.userId, {
      symbol: symbol,
      quantity: quantity,
      price: price
    }).then(response => {
      this.setState({modalIsOpen: false});
      this.rerenderTable();
    })
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  rerenderTable() {
    axios.get("/api/stocks/" + this.props.userId).then((response) => {
      this.setState({stocks: response.data})
    })
  }

  componentDidMount() {
    axios.get("/api/stocks/" + this.props.userId).then((response) => {
      this.setState({stocks: response.data})
      console.log(response)
    })
  }

  render() {
    return (
      <div className=" stocks">
        <StockPage />
        <StockPanel userId={this.props.userId} />
        <div className="container stockPanel shadow">
          <div className="jumbotron">
            <div className="row">
              <div className="stockHoldingHead container-fluid">
                <p className="text-center">
                Your Portfolio Holdings
                <br />
                <button className="lightshadow" onClick={() => this.openModal("add", "new")} id="addNew">Add New Stock Holding</button>
                </p>
              </div>
            </div>
            <div className="row">
              <table className="table" id="holdingTable">
                <thead>
                  <tr>
                    <th scope="col">Stock</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Cashflow</th>
                    <th scope="col">Add</th>
                    <th scope="col">Reduce</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.stocks.map(stock => (
                  <TableRow 
                  symbol={stock.symbol}
                  quantity={stock.quantity}
                  cashflow={stock.cashflow}
                  id={stock.id}
                  key={stock.id}
                  addStock={this.openModal}
                  reduceStock={this.openModal}
                  />
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal 
        isOpen={this.state.modalIsOpen}
        contentLabel="Transaction Modal"
        onRequestClose={this.closeModal}
        style={customStyles}
        ><div className="modalBackground">
        <p>Log your transaction details here</p><br />
        {this.state.transactionType === "add" ? 
        <AddStock holdingId={this.state.holdingId} handler={this.handleAdd} quantity={this.state.quantity} symbol={this.state.selectedSymbol} />
        :
        <ReduceStock holdingId={this.state.holdingId} handler={this.handleReduce} quantity={this.state.quantity} symbol={this.state.selectedSymbol}/>}
        <button className="closeBtn lightshadow" onClick={this.closeModal}>close</button>
        </div>
        </Modal>
      </div>
    )
  }
}

export default Stocks
