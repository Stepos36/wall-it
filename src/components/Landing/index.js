import React from "react";

class Landing extends React.Component {

    state = {
        page: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
      };

      handleLoginSubmit = event => {
        event.preventDefault();
        console.log(this.state.email, this.state.password)
        this.props.handler(1, true)
      }
    
      handleRegisterSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        if (this.state.page == "") {
            return (
            <div>
                <button onClick={() => this.setState({page: "register"})}>Register</button>
                <button onClick={() => this.setState({page: "login"})}>Log In</button>
            </div>
            );
        }
        else if (this.state.page == "login") {
            return (
                <div>
                <form className="form">
                <input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="E-Mail"
                />
                <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                />
                <button onClick={this.handleLoginSubmit}>Submit</button>
                </form>
            </div>
            );
        }
        else if (this.state.page == "register") {
            return (
                <div>
                    <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="E-Mail"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button onClick={this.handleRegisterSubmit}>Submit</button>
                </form>
                </div>
            )
        }
    }
}

export default Landing;
