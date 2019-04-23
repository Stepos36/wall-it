import React from 'react';
import ReactDom from 'react-dom';


export default class ButtonPanel extends React.Component {
  constructor() {
    super();
    this.keyMapping = {};
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    var target = event.target;
    target.classList.remove('clicked');
    setTimeout(() => {
      target.classList.add('clicked');
    }, 0);
    this.props.onClick(target.dataset.value);
  }
  componentDidMount() {
    var dom = ReactDom.findDOMNode(this);
    var buttons = dom.querySelectorAll('button');
    buttons = [].slice.call(buttons);
    buttons.forEach((button) => {
      this.keyMapping[button.dataset.code] = button;
    });

    window.onkeydown = (event) => {
      var button;
      var key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
      if (button = this.keyMapping[key]) {
        button.click();
        event.stopPropagation();
        event.preventDefault();
      }
    };
  }
  render() {
    return (
      <div className="button-panel row">
        <div className="s3 column">
          <div className="s1 row">
            <button className="button s1"  data-value="c" onClick={this.onClick}>C</button>
            <button className="button s1"  data-value="back" onClick={this.onClick}>←</button>
            <button className="button s1"  data-value="/" onClick={this.onClick}>÷</button>
          </div>
          <div className="s1 row">
            <button className="button s1"  data-value="7" onClick={this.onClick}>7</button>
            <button className="button s1"  data-value="8" onClick={this.onClick}>8</button>
            <button className="button s1"  data-value="9" onClick={this.onClick}>9</button>
          </div>
          <div className="s1 row">
            <button className="button s1"  data-value="4" onClick={this.onClick}>4</button>
            <button className="button s1"  data-value="5" onClick={this.onClick}>5</button>
            <button className="button s1"  data-value="6" onClick={this.onClick}>6</button>
          </div>
          <div className="s1 row">
            <button className="button s1"  data-value="1" onClick={this.onClick}>1</button>
            <button className="button s1"  data-value="2" onClick={this.onClick}>2</button>
            <button className="button s1"  data-value="3" onClick={this.onClick}>3</button>
          </div>
          <div className="s1 row">
            <button className="button s2"  data-value="0" onClick={this.onClick}>0</button>
            <button className="button s1"  data-value="." onClick={this.onClick}>.</button>
          </div>
        </div>
        <div className="s1 column">
          <button className="button s1"  data-value="*" onClick={this.onClick}>×</button>
          <button className="button s1"  data-value="-" onClick={this.onClick}>-</button>
          <button className="button s1"  data-value="+" onClick={this.onClick}>+</button>
          <button className="button s2 button-equal"  data-value="=" onClick={this.onClick}>=</button>
        </div>
      </div>
    );
  }
}
