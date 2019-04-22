import React, { Component } from 'react';
import '../../App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import Article from "../Article";
import Watchlist from "../Watchlist";
import Home from "../Pages/Home"
import Profile from "../Pages/Profile"
import BudgetCalc from "../Pages/BudgetCalc"
import Stocks from "../Pages/Stocks"
import Bills from "../Pages/Bills"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
        <div className='row'>
          <div className='col-md-2'>
            <Navbar />
          </div>
          <div className='col-md-7'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/budget-calc" component={BudgetCalc} />
              <Route exact path="/stocks" component={Stocks} />
              <Route exact path="/bills" component={Bills} />
            </Switch>
          </div>
          <div className='col-md-3'>
            <div className='col-md-12'>
            <Article /></div>
            <div className='col-md-12'>
            <Watchlist /></div>

          </div>
        </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default Content;
