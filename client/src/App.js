import React, { Component } from 'react';
import './App.css';
import Landing from "./components/Landing";
import Content from "./components/Content";

class App extends Component {
  state = {
    loggedIn: false,
    userId: ""
  }

  landingHandler = (id, boolean) => {
    this.setState({
      userId: id,
      loggedIn: boolean
    })
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Content 
        userId={this.state.userId}/> : 
        <Landing 
        handler={this.landingHandler}/>}
      </div>
    );
  }
}

export default App;
