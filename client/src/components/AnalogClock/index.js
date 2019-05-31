import React, { Component } from 'react';
import "./style.css"
import Clock from 'react-clock';

class Analogclock extends Component {
  render() {
        return (
            <div>
                <div className="anaClock">
                    <Clock
                        size={90}
                        value={this.props.timeZone}
                    />
                </div>
            </div>
        );
    }
}

export default Analogclock;