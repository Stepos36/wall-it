import React from "react";
import "./style.css";

const Navbar = () => (
    <div className="sideNav">
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
)

export default Navbar;