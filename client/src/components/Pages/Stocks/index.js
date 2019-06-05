import React, { Component } from 'react';
import StockPage from './../../StockPage';
import StockPanel from "./../../utils/StockPanel";
import TableRow from "./../../utils/TableRow";
import AddStock from "./../../utils/AddStock";
import ReduceStock from "./../../utils/ReduceStock";
import DetailRow from "./../../utils/DetailRow";
import Modal from 'react-modal';
import axios from "axios";
import './style.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

export class Stocks extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      detailsExpanded: false,
      expandedSymbol: "",
      buyDetails: [],
      sellDetails: [],
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
    this.removeHolding = this.removeHolding.bind(this);
    this.rerenderTable = this.rerenderTable.bind(this);
    this.expandDetails = this.expandDetails.bind(this);
    this.reduceDetails = this.reduceDetails.bind(this);
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
      this.setState({ modalIsOpen: false });
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
      this.setState({ modalIsOpen: false });
      this.rerenderTable();
    })
  }

  removeHolding(id) {
    axios.delete("/api/stocks/" + id)
    .then(response => {
      this.rerenderTable()
    })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  rerenderTable() {
    axios.get("/api/stocks/" + this.props.userId).then((response) => {
      this.setState({ stocks: response.data })
    })
  }

  expandDetails(index, symbol) {
    this.setState({
      detailsExpanded: true,
      expandedSymbol: symbol,
      buyDetails: this.state.stocks[index].Stock_buys,
      sellDetails: this.state.stocks[index].Stock_sells
    })
  }

  reduceDetails() {
    console.log("click")
    this.setState({
      detailsExpanded: false
    })
  }

  componentDidMount() {
    axios.get("/api/stocks/" + this.props.userId).then((response) => {
      this.setState({ stocks: response.data })
      console.log(response)
    })
  }

  render() {
    return (
      <div className=" stocks">
        <h1>Stocks</h1>
        <StockPage />
        <StockPanel userId={this.props.userId} />
        <div className="container stockPanel shadow">
          <div className="jumbotron" id="tableTron">
            <div className="row">
              {this.state.detailsExpanded ?
                <div className="container-fluid">
                <h4 className="text-center buySell">Transaction details for {this.state.expandedSymbol}</h4>
                <br />
                <div className="row">
                <div className="col-md-6">
                <h6 className="buySell text-center">Buys</h6>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.buyDetails.map(transaction => (
                      <DetailRow
                      date={transaction.createdAt}
                      quantity={transaction.quantity}
                      price={transaction.price}
                      key={transaction.id}
                      />
                    ))}
                  </tbody>
                </table>
                </div>
                <div className="col-md-6">
                <h6 className="buySell text-center">Sells</h6>
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>                        
                    </thead>
                    <tbody>
                      {this.state.sellDetails.map(transaction => (
                        <DetailRow 
                        date={transaction.createdAt}
                        quantity={transaction.quantity}
                        price={transaction.price}
                        key={transaction.id}
                        />
                      ))}
                    </tbody>
                </table>
                </div>
                </div>
                <hr />
                <button className="lightshadow" onClick={this.reduceDetails}>Hide Details</button>
                <br /> <br />
              </div> 
              : <div /> }
            </div>
            <div className="row">
              <div className="stockHoldingHead container-fluid">
                <h4 className="buySell text-center">
                  Your Portfolio Holdings
                </h4>
                <br />
                <p className="text-center"><button className="lightshadow" onClick={() => this.openModal("add", "new")} id="addNew">Add New Stock Holding</button></p>
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
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.stocks.map( (stock, index) => (
                    <TableRow
                      symbol={stock.symbol}
                      index={index}
                      quantity={stock.quantity}
                      cashflow={stock.cashflow}
                      id={stock.id}
                      key={stock.id}
                      addStock={this.openModal}
                      reduceStock={this.openModal}
                      expandDetails={this.expandDetails}
                      remove={this.removeHolding}
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
              <ReduceStock holdingId={this.state.holdingId} handler={this.handleReduce} quantity={this.state.quantity} symbol={this.state.selectedSymbol} />}
            <button className="closeBtn lightshadow" onClick={this.closeModal}>close</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Stocks
