import React, { Component } from 'react';
import axios from "axios";
import "./style.css";

class StockPage extends React.Component {
    state = {
        dowPercent: "",
        dowTotal: "",
        dowDiff: "",
        nasPercent: "",
        nasTotal: "",
        nasDiff: "",
        spPercent: "",
        spTotal: "",
        spDiff: ""
    }

    componentDidMount() {
        axios.get("https://www.worldtradingdata.com/api/v1/stock?symbol=^DJI,^IXIC,^INX&api_token=Dvk9Bf1Qefk0H0z2th3l0Gge2ZafA8FvHjc1MRDhEmJSiffj3Lk0M85AihJ8")
        .then(result => {
            let dowDiv = document.getElementById('dow');
            let nasDiv = document.getElementById('nasdaq');
            let spDiv = document.getElementById('sp')
            if (result.data.data[0].day_change > 0) {
                dowDiv.style.color = 'green'
            }
            if (result.data.data[0].day_change < 0) {
                dowDiv.style.color = 'red'
            }
            if (result.data.data[1].day_change > 0) {
                nasDiv.style.color = 'green'
            }
            if (result.data.data[1].day_change < 0) {
                nasDiv.style.color = 'red'
            }
            if (result.data.data[2].day_change > 0) {
                spDiv.style.color = 'green'
            }
            if (result.data.data[2].day_change < 0) {
                spDiv.style.color = 'red'
            }
            this.setState({
                dowPercent: result.data.data[0].change_pct,
                dowTotal: result.data.data[0].price,
                dowDiff: result.data.data[0].day_change,
                nasPercent: result.data.data[1].change_pct,
                nasTotal: result.data.data[1].price,
                nasDiff: result.data.data[1].day_change,
                spPercent: result.data.data[2].change_pct,
                spTotal: result.data.data[2].price,
                spDiff: result.data.data[2].day_change
            })
        })
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-4">
                        <div id="dow">
                        Dow {this.state.dowDiff > 0 ? "+" : "-"}{this.state.dowPercent}%<br />
                        {this.state.dowTotal} / {this.state.dowDiff}
                        </div>
                    </div>
                    <div className="col-4">
                        <div id="nasdaq">
                        Nasdaq {this.state.nasDiff > 0 ? "+" : "-"}{this.state.nasPercent}%<br />
                        {this.state.nasTotal} / {this.state.nasDiff}
                        </div>
                    </div>
                    <div className="col-4">
                        <div id="sp">
                        S+P500 {this.state.spDiff > 0 ? "+" : "-"}{this.state.spPercent}%<br />
                        {this.state.spTotal} / {this.state.spDiff}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockPage;