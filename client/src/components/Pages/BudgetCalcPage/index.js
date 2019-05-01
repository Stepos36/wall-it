import React, { Component } from 'react'
// import { PieChart } from '@culturehq/charts';
import '@culturehq/charts/dist/style.css';
import BudgetCalc from '../../BudgetCalc'

// sample
// var expenseData = {
//   power: 80,
//   gas: 50,
//   phoneAndInternet: 200,
// };


class BudgetCalcPage extends Component {
  render() {
    return (
      <div id="BudgetCalcPage" className="jumbotron nopadding contentBorder shadow">
        <h1>Budget Calculator and Tracker</h1>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            {/* <PieChart expenseData={expenseData} /> */}
        </div>
        <div className='col-md-12'>
          <ul>
            <BudgetCalc userId={this.props.userId}/>
          </ul>
        </div>
      </div>
    )
  }
}

export default BudgetCalcPage
