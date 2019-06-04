import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import Modal from 'react-modal';
import AddCurrency from './utils/AddCurrency'
import ReduceCurrency from './utils/ReduceCurrency'

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

class CurrencyPage extends Component {
  constructor() {
    super();

    this.state = {
      currencies: [],
      modalIsOpen: false,
      selectedSymbol: "",
      holdingId: "",
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }

  componentDidMount() {
    axios.get("/api/currency/" + this.props.userId).then((response) => {
      this.setState({ currencies: response.data })
    })
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

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleAdd(symbol, quantity, price) {
    axios.post("/api/currency/" + this.props.userId, {
      symbol: symbol,
      quantity: quantity,
      price: price,
    }).then(response => {
      this.setState({ modalIsOpen: false });
      this.rerenderTable();
    })
  }

  handleReduce(symbol, quantity, price) {
    axios.put("/api/currency" + this.props.userId, {
      symbol: symbol,
      quantity: quantity,
      price: price,
    }).then(response => {
      this.setState({ modalIsOpen: false });
      this.rerenderTable();
    })
  }

  rerenderTable() {
    axios.get("/api/currency/" + this.props.userId).then((response) => {
      this.setState({ currencies: response.data })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container stockPanel shadow">
          <div className="jumbotron">
            <div className="row">
              <div className="stockHoldingHead container-fluid">
                <p className="text-center">
                  Your Currency Holdings
                <br />
                  <button className="lightshadow" onClick={() => this.openModal("add", "new")} id="addNew">Add New Currency Holding</button>
                </p>
              </div>
            </div>
            <div className="row">
              <table className="table" id="holdingTable">
                <thead>
                  <tr>
                    <th scope="col">Currency Pair</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Cur</th>
                    <th scope="col">Add</th>
                    <th scope="col">Reduce</th>
                  </tr>
                </thead>
                <tbody>

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
              <AddCurrency holdingId={this.state.holdingId} handler={this.handleAdd} symbol={this.state.selectedSymbol} />
              :
              <ReduceCurrency holdingId={this.state.holdingId} handler={this.handleReduce} symbol={this.state.selectedSymbol} quantity={this.state.quantity} />}
            <button className="closeBtn lightshadow" onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    )
  }
}


export default CurrencyPage;
