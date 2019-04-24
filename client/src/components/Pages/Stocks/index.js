import React, { Component } from 'react';
import StockPage from './../../StockPage';
import TableRow from "./../../utils/TableRow";
import AddStock from "./../../utils/AddStock";
import ReduceStock from "./../../utils/ReduceStock";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
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
      symbol: "AAPL",
      modalIsOpen: false,
      transactionType: "",
      holdingId: "",
      stocks: []
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  openModal(type, id) {
    this.setState({
      modalIsOpen: true,
      transactionType: type,
      holdingId: id
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  handleInputChange(event) {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
};

  componentDidMount() {
    axios.get("/api/stocks/" + this.props.userId).then((response) => {
      this.setState({stocks: response.data})
    })
  }

  render() {
    return (
      <div>
        <StockPage />
          <div className="container">
            <form>
            <div className="form-group row">
              <label htmlFor="symbol" className="col-sm-2 col-form-label">Stock Lookup</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="symbol" value={this.state.symbol} onChange={this.handleInputChange}></input>
              </div>
            </div>
            </form>
          </div>
        <div className='widget'>
          <TradingViewWidget
            symbol={this.state.symbol}
            theme={Themes.DARK}
            locale="us"
            width='autosize'
            height='520'
          />
        </div>
        <div className="container">
          <div className="jumbotron">
            <div className="row">
              <div className="stockHoldingHead container-fluid">
                <p className="text-center">
                Your Portfolio Holdings
                <br />
                <button onClick={() => this.openModal("add", "new")} id="addNew">Add New Stock Holding</button>
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
        >
        This is the transaction modal<br />
        {this.state.transactionType} {this.state.holdingId}
        {this.state.transactionType == "add" ? <AddStock holdingId={this.state.holdingId} /> : <ReduceStock holdingId={this.state.holdingId} />}
        <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    )
  }
}

export default Stocks
