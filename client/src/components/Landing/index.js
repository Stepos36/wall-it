import React from "react";
import axios from "axios";
import "./style.css";
import Particles from 'react-particles-js'

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
        let email = this.state.email
        let password = this.state.password
        axios.post("/api/users/login", {
            email: email,
            password: password
        }).then(response => {
            if (response.status === 200) {
                this.props.handler(response.data.id, true, response.data.first_name, response.data.last_name)
            }
            else if (response.status === 205) {
                alert("Incorrect Username and/or Password")
            }
            else {
                alert("Unknown Error")
            }
        })
    }

    handleRegisterSubmit = (event) => {
        event.preventDefault();
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let email = this.state.email
        let password = this.state.password
        axios.post("/api/users/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then(response => {
            if (response.status === 200) {
                this.props.handler(response.data.id, true, response.data.first_name, response.data.last_name)
            }
            else { alert("Unknown Error") }
        })
    }

    firstpage() {
        return (
            <div className="background">
                <Particles params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                              enable: true,
                              value_area: 800
                            }
                          },
                          size: {
                            value: 7.891476416322726,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 40,
                              size_min: 0.1,
                              sync: false
                            }
                          } 
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: true,
                            mode: "repulse"
                          },
                          onclick: {
                            enable: true,
                            mode: "push"
                          },
                          resize: true
                        },
                        modes: {
                          grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4
                          },
                          push: {
                            particles_nb: 4
                          },
                          remove: {
                            particles_nb: 2
                          }
                        }
                      }
                }}/>
                <div className="container login-container text-center card card-header">
                    <h2>Welcome to Wall-IT!</h2> <br></br> <h3>Please login or register an account</h3>
                    <div className="row">
                        <div className="col-md-12 forms card-body">
                            <div>
                                <button className="lightshadow loginBtn buttons btn-primary btn-lg" onClick={() => this.setState({ page: "login" })}>Log In </button>
                            </div>
                            <div>
                                <button className="lightshadow regBtn buttons btn-primary btn-lg" onClick={() => this.setState({ page: "register" })}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    goBack = (event) => {
        return  this.firstpage()
    }

    render() {
        if (this.state.page == "") {
           return this.firstpage()
        }
        else if (this.state.page == "login") {
            return (
                <div className="background">
                    <Particles params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                              enable: true,
                              value_area: 800
                            }
                          },
                          size: {
                            value: 7.891476416322726,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 40,
                              size_min: 0.1,
                              sync: false
                            }
                          } 
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: true,
                            mode: "repulse"
                          },
                          onclick: {
                            enable: true,
                            mode: "push"
                          },
                          resize: true
                        },
                        modes: {
                          grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4
                          },
                          push: {
                            particles_nb: 4
                          },
                          remove: {
                            particles_nb: 2
                          }
                        }
                      }
                }}/>
                    <div className="container login-container text-center card card-header">
                        <div><h3>Please login to your account to continue</h3></div>
                        <form className="form">
                            <div className="login-info">
                                <input
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="E-Mail"
                                />
                            </div>
                            <div className="login-info">
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="lightshadow subBtn buttons btn-primary btn-lg" onClick={this.goBack}>Back</button>
                            <button className="lightshadow subBtn buttons btn-primary btn-lg" onClick={this.handleLoginSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            );
        }
        else if (this.state.page == "register") {
            return (
                <div className="background">
                    <Particles params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                              enable: true,
                              value_area: 800
                            }
                          },
                          size: {
                            value: 7.891476416322726,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 40,
                              size_min: 0.1,
                              sync: false
                            }
                          } 
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: {
                            enable: true,
                            mode: "repulse"
                          },
                          onclick: {
                            enable: true,
                            mode: "push"
                          },
                          resize: true
                        },
                        modes: {
                          grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4
                          },
                          push: {
                            particles_nb: 4
                          },
                          remove: {
                            particles_nb: 2
                          }
                        }
                      }
                }}/>
                    <div className="container login-container text-center card card-header">
                        <div><h3>Please fill out all fields to register to Wall-IT</h3></div>
                        <form className="form">
                            <div>
                                <input className="user-info"
                                    value={this.state.firstName}
                                    name="firstName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="First Name"
                                />
                                <input className="user-info"
                                    value={this.state.lastName}
                                    name="lastName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div>
                                <input className="user-info"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="E-Mail"
                                />
                                <input className="user-info"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <button className="lightshadow subBtn buttons btn-primary btn-lg" onClick={this.goBack}>Back</button>
                                <button className="lightshadow subBtn buttons btn-primary btn-lg" onClick={this.handleRegisterSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default Landing;
