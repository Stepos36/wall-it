import React from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import "./style.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { homedir } from "os";


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
                    Rates
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink
                        exact={true}
                        to="/buget-calc"
                        className={'nav-link'}
                        activeClassName='active'
                    >
                    Buget Tracker
                    </NavLink>
                </li>
            </ul>
        </Menu>
    );
};

    







// Links with ANCOR TAGS

{/* <a className="menu-item" href="/">
<NavLink
    exact={true}
    to="/home"
    className={'nav-link'}
    activeClassName='active'
/>
Home</a>

<a className="menu-item" href="/stocks">
<NavLink
    exact={true}
    to="/stocks"
    className={'nav-link'}
    activeClassName='active'
/>
Stocks</a>

<a className="menu-item" href="/bills">
<NavLink
    exact={true}
    to="/bills"
    className={'nav-link'}
    activeClassName='active'
/>
Bills</a>

<a className="menu-item" href="/rates">
<NavLink
    exact={true}
    to="/rates"
    className={'nav-link'}
    activeClassName='active'
/>
Rates</a>

<a className="menu-item" href="/buget-calc">
<NavLink
    exact={true}
    to="/budget-calc"
    className={'nav-link'}
    activeClassName='active'
/>
Buget Calculator</a> */}

















