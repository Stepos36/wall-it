import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <div className="sideNav">
            <div className="row">
                <div className="col-12">
                    <nav className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink
                                exact={true}
                                to="/home"
                                className={'nav-link'}
                                activeClassName='active'
                            >
                                Home
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                exact={true}
                                to="/profile"
                                className={'nav-link'}
                                activeClassName='active'
                            >
                                Profile
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                exact={true}
                                to="/budget-calc"
                                className={'nav-link'}
                                activeClassName='active'
                            >
                                Budget Calc
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                exact={true}
                                to="/stocks"
                                className={'nav-link'}
                                activeClassName='active'
                            >
                                Stocks
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                exact={true}
                                to="/bills"
                                className={'nav-link'}
                                activeClassName='active'
                            >
                                Bills
                            </NavLink>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
  }

export default Navbar;