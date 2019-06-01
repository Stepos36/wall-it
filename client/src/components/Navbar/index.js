import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./style.css";

export default props => {
    return (
        <Menu>
            <ul>
                <li className="menu-item">
                    <NavLink
                        exact={true}
                        to="/home"
                        className={'nav-link'}
                        activeClassName='active'
                    >
                    Home
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink
                        exact={true}
                        to="/stocks"
                        className={'nav-link'}
                        activeClassName='active'
                    >
                    Stocks
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink
                        exact={true}
                        to="/rates"
                        className={'nav-link'}
                        activeClassName='active'
                    >
                    Mortgage Rates
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink
                        exact={true}
                        to="/budget-calc"
                        className={'nav-link'}
                        activeClassName='active'
                    >
                    Budget Tracker
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink
                        exact={true}
                        to="/currency"
                        className={'nav-link'}
                        activeClassName='active'
                    >
                    Currency Page
                    </NavLink>
                </li>
            </ul>
        </Menu>
    );
};
