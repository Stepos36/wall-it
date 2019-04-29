import React, { Component } from 'react';
import axios from "axios";
import "./style.css";

class StockPage extends React.Component {
    state = {
        zeroPercent: "",
        zeroTotal: "",
        zeroDiff: "",
        zeroName: "",
        onePercent: "",
        oneTotal: "",
        oneDiff: "",
        oneName: "",
        twoPercent: "",
        twoTotal: "",
        twoDiff: "",
        twoName: "",
        threePercent: "",
        threeTotal: "",
        threeDiff: "",
        threeName: "",
        fourPercent: "",
        fourTotal: "",
        fourDiff: "",
        fourName: ""
    }

    componentDidMount() {
        axios.get("https://www.worldtradingdata.com/api/v1/stock?symbol=^DJI,^IXIC,^INX,^UKX,^NI225&api_token=7j9FnMBpalVytmiowz2gdPdq6lYk2PDNtJUvLTQjxBUqWxnp6Sp5Az3gS9g5")
        .then(result => {
            console.log(result)
            let zeroDiv = document.getElementById('zero');
            let oneDiv = document.getElementById('one');
            let twoDiv = document.getElementById('two');
            let threeDiv = document.getElementById('three');
            let fourDiv = document.getElementById('four');
            if (result.data.data[0].day_change > 0) {
                zeroDiv.style.color = 'green'
            }
            if (result.data.data[0].day_change < 0) {
                zeroDiv.style.color = 'red'
            }
            if (result.data.data[1].day_change > 0) {
                oneDiv.style.color = 'green'
            }
            if (result.data.data[1].day_change < 0) {
                oneDiv.style.color = 'red'
            }
            if (result.data.data[2].day_change > 0) {
                twoDiv.style.color = 'green'
            }
            if (result.data.data[2].day_change < 0) {
                twoDiv.style.color = 'red'
            }
            if (result.data.data[3].day_change > 0) {
                threeDiv.style.color = 'green'
            }
            if (result.data.data[3].day_change < 0) {
                threeDiv.style.color = 'red'
            }
            if (result.data.data[4].day_change > 0) {
                fourDiv.style.color = 'green'
            }
            if (result.data.data[4].day_change < 0) {
                fourDiv.style.color = 'red'
            }
            this.setState({
                zeroPercent: result.data.data[0].change_pct,
                zeroTotal: result.data.data[0].price,
                zeroDiff: result.data.data[0].day_change,
                zeroName: result.data.data[0].name,
                onePercent: result.data.data[1].change_pct,
                oneTotal: result.data.data[1].price,
                oneDiff: result.data.data[1].day_change,
                oneName: result.data.data[1].name,
                twoPercent: result.data.data[2].change_pct,
                twoTotal: result.data.data[2].price,
                twoDiff: result.data.data[2].day_change,
                twoName: result.data.data[2].name,
                threePercent: result.data.data[3].change_pct,
                threeTotal: result.data.data[3].price,
                threeDiff: result.data.data[3].day_change,
                threeName: result.data.data[3].name,
                fourPercent: result.data.data[4].change_pct,
                fourTotal: result.data.data[4].price,
                fourDiff: result.data.data[4].day_change,
                fourName: result.data.data[4].name
            })
        })
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-2">
                        <div id="zero">
                        {this.state.zeroName} {this.state.zeroDiff > 0 ? "+" : ""}{this.state.zeroPercent}%<br />
                        {this.state.zeroTotal} / {this.state.zeroDiff}
                        </div>
                    </div>
                    <div className="col-2">
                        <div id="one">
                        {this.state.oneName} {this.state.oneDiff > 0 ? "+" : ""}{this.state.onePercent}%<br />
                        {this.state.oneTotal} / {this.state.oneDiff}
                        </div>
                    </div>
                    <div className="col-2">
                        <div id="two">
                        {this.state.twoName} {this.state.twoDiff > 0 ? "+" : ""}{this.state.twoPercent}%<br />
                        {this.state.twoTotal} / {this.state.twoDiff}
                        </div>
                    </div>
                    <div className="col-2">
                        <div id="three">
                        {this.state.threeName} {this.state.threeDiff > 0 ? "+" : ""}{this.state.threePercent}%<br />
                        {this.state.threeTotal} / {this.state.threeDiff}
                        </div>
                    </div>
                    <div className="col-2">
                        <div id="four">
                        {this.state.fourName} {this.state.fourDiff > 0 ? "+" : ""}{this.state.fourPercent}%<br />
                        {this.state.fourTotal} / {this.state.fourDiff}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StockPage;