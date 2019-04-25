import React, { Component } from 'react';
import Main from "./../Main"
import Article from "./../Article"
import Watchlist from "./../Watchlist"
import '../../App.css';
import Navbar from "./../Navbar";
import Header from "./../Header";
import Footer from "./../Footer";

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
            <Main />
          </div>
          <div className='col-md-3' id='div1'>
            <Article />
            <div className='row'>
              <div className='col-12' id='div2'>
                <Watchlist />
              </div>
            </div></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
