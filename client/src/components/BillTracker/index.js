import React, { Component } from 'react';
import axios from 'axios';
import BillDisplay from "./BillDisplay"

class BillTracker extends Component {
    constructor() {
        super()

        this.state = {
            bills: []
        }
    }

    componentDidMount() {
        axios.get("/api/expenses/" + this.props.userId)
        .then(response => {

        })
    }

    render() {
        return (
            <div className="container">

            </div>
        )
    }
} 

export default BillTracker;