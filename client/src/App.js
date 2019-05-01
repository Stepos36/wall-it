import React, { Component } from 'react';
import './App.css';
import Landing from "./components/Landing";
import Content from "./components/Content";

class App extends Component {
  state = {
    loggedIn: false,
    userId: "",
    name: "",
    lastname: ""
  }

  landingHandler = (id, boolean, name, lastname) => {
    this.setState({
      userId: id,
      loggedIn: boolean,
      name: name,
      lastname: lastname
    })
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Content 
        userId={this.state.userId} name={this.state.name} lastname={this.state.lastname}/> : 
        <Landing 
        handler={this.landingHandler}/>}
      </div>
    );
  }
}

export default App;
