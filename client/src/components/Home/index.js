import React, { Component } from 'react';
import ForexTicker from './../ForexTicker';
import '../../App.css';
import Navbar from "./../Navbar";
import Header from "./../Header";
import Footer from "./../Footer";
import Stocks from "./../Stocks";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='row'>
          <div className='col-md-2'>
            <Navbar />
          </div>
          <div className='col-md-7'>
          </div>
          <div className='col-md-3'>
            <ForexTicker />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
