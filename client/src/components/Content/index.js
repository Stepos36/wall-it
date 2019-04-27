import React, { Component } from 'react';
import './style.css';
import '../../App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import Article from "../Article";
import Watchlist from "../Watchlist";
import Home from "../Pages/Home"
import Profile from "../Pages/Profile"
import BudgetCalcPage from "../Pages/BudgetCalcPage"
import Stocks from "../Pages/Stocks"
import Bills from "../Pages/Bills"
import Rates from "../Pages/Rates"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Content extends Component {
  componentDidMount() {
    console.log(this.props.userId)
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Router>
          <div className='row'>
            <Navbar />
            <div className='col-md-1'>
            </div>
            <div className='col-md-8'>
              <Switch>
                <Route exact path="/" render={(routeProps) => (
                  <Home userId={this.props.userId} />
                )} />
                <Route exact path="/home" render={(routeProps) => (
                  <Home userId={this.props.userId} />
                )} />
                <Route exact path="/profile" render={(routeProps) => (
                  <Profile userId={this.props.userId} />
                )} />
                <Route exact path="/budget-calc" render={(routeProps) => (
                  <BudgetCalc userId={this.props.userId} />
                )} />
                <Route exact path="/stocks" render={(routeProps) => (
                  <Stocks userId={this.props.userId} />
                )} />
                <Route exact path="/bills" render={(routeProps) => (
                  <Bills userId={this.props.userId} />
                )} />
                <Route exact path="/rates" render={(routeProps) => (
                  <Rates userId={this.props.userId} />
                )} />
              </Switch>
            </div>
            <div className='col-md-3 rightSideNav'>
              <div className='col-md-12'>
                <Article /></div>
              <div className='col-md-12'>
                <Watchlist userId={this.props.userId}/></div>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Content;
