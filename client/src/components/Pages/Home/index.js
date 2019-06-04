import React, { Component } from 'react';
import Analogclock from "../../AnalogClock";
import Digiclock from "../../Digiclock";
import CurrencyCalc from './../../CurrencyCalc';
import Calculator from './../../Calculator/Calculator';
import Calendar from 'react-calendar'
import { PieChart } from '@culturehq/charts';
import BillTracker from "../../BillTracker";
import MapWidget from "./../../MapWidget"
import YVideo from "./../../YouTube"
import '@culturehq/charts/dist/style.css';
import home from "./home.png"
import './style.css';


// ec5dc0b233f795269cb5245730d5817320950022

const getRandomDatum = () => Math.floor(Math.random() * 100);

//random mock data - will be replaced by personalized stock data  pulled from database
const data = {
  EUR: getRandomDatum(),
  AAPL: getRandomDatum(),
  BP: getRandomDatum(),
  TSLA: getRandomDatum(),
  BTC: getRandomDatum()
};

export class Home extends Component {
  state = {
    nyTime: '',
    sanFranTime: '',
    ukTime: '',
    toykoTime: ''
  }

  componentDidMount() {
    setInterval(
      () => {
        var nyTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        nyTime = new Date(nyTime);

        var ukTime = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
        ukTime = new Date(ukTime);

        var sanFranTime = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
        sanFranTime = new Date(sanFranTime);

        var toykoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
        toykoTime = new Date(toykoTime);



        this.setState({
          nyTime: nyTime,
          sanFranTime: sanFranTime,
          ukTime: ukTime,
          toykoTime: toykoTime
        })

      },
      1000);

  }

  render() {
    return (
      <div className="container homeContent"> 
        <h1>Home | {this.props.name} {this.props.lastname}</h1>
        <div className="row text-center">
        <div className="jumbotron clockContainer shadow">
        <div className='col-3 newYorkTime clockDiv hvr-push'>
            <p className="NYFull">NEW YORK</p>
            <p className="NYShort">NY</p>
            <Analogclock
              timeZone={this.state.nyTime}
            />
            <div>
              <Digiclock
                timeZone={'America/New_York'}
              />
            </div>
          </div>
          <div className="col-3 sanFranTime clockDiv hvr-push">
            <p className="SFFull">SAN FRANCISCO</p>
            <p className="SFShort">SF</p>
            <Analogclock
              timeZone={this.state.sanFranTime}
            />
            <div>
              <Digiclock
                timeZone={'America/Los_Angeles'}
              />
            </div>
          </div>
          <div className="col-3 ukTime clockDiv hvr-push">
            <p className="UKFull">UNITED KINGDOM</p>
            <p className="UKShort">UK</p>
            <Analogclock
              timeZone={this.state.ukTime}
            />
            <div>
              <Digiclock
                timeZone={'Europe/London'}
              />
            </div>
          </div>

          <div className="col-3 toykoTime clockDiv hvr-push">
            <p className="TYOFull">TOKYO</p>
            <p className="TYOShort">TYO</p>
            <Analogclock
              timeZone={this.state.toykoTime}
            />
            <div>
              <Digiclock
                timeZone={'Asia/Tokyo'}
              />
            </div>
          </div>
        </div>
          

          <div className='container contentBorder jumbotron shadow'>
            <div className='row contents'>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <BillTracker userId={this.props.userId} />
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12'>
                <div className='row contents'>
                  <div style={{ height: 250 }} className='col-lg-6 col-md-6 col-sm-12'>
                    <Calculator />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <PieChart data={data} />
                  </div>
                  {/* <div className='col-lg-4 col-md-6 col-sm-12 youtube mt-auto'>
                    <YVideo />
                  </div> */}
                </div>
                <div className='row contents2 float-right'>
                  {/* <div className='col-lg-4 col-md-6 col-sm-12 map'>
                    <MapWidget />
                  </div> */}
                  <div className='col-lg-6 col-md-6 col-sm-12 calendar'>
                    <Calendar />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 converterCol'>
                    <CurrencyCalc />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

