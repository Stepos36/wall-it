import React, { Component } from 'react';
import Analogclock from "../../AnalogClock";
import Digiclock from "../../Digiclock";
import "./style.css";

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
      <div>
        <div className="container">
          <div className="row text-center">
            <div className='col-3'>
              <p>NEW YORK</p>
              <Analogclock 
                timeZone={this.state.nyTime}
              />
              <div>
                <Digiclock 
                  timeZone={'America/New_York'}
                />
              </div>
            </div>
            <div className="col-3 sanFranTime">
              <p>SAN FRANCISCO</p>
              <Analogclock
                timeZone={this.state.sanFranTime}
              />
              <div>
                <Digiclock
                  timeZone={'America/Los_Angeles'}
                />
              </div>
            </div>
            <div className="col-3 ukTime">
              <p>UNITED KINGDOM</p>
              <Analogclock
                timeZone={this.state.ukTime}
              />
              <div>
                <Digiclock
                  timeZone={'Europe/London'}
                />
              </div>
            </div>

            <div className="col-3 toykoTime">
              <p>TOYKO</p>
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
        </div>
      </div>
    )
  }
}

export default Home

