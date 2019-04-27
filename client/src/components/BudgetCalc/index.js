import React, { Component } from 'react';
// import './style.css';
import FormGroup from '../BudgetFormGroup';
import '../../App.css';

class BudgetCalc extends Component {
    constructor() { 
        super();

        this.state = {
        rows: ['row1']
        };
    };

        componentDidMount() {
        console.log(this.props.userId)
        } 

        addRow(event) {
            event.preventDefault();
            console.log(this)
            var rows = [...this.state.rows]
            rows.push('newRow')
            this.setState({rows: rows})
        }
        
        pushRows(event) {
            event.preventDefault();
            // push to the database function
        }

        render() {
            return (
                <div className="contaianer">
                    <div className="row text-center">
                        <div className='col-12'>
                            <form>
                                {this.state.rows.map(row => <FormGroup/>)}
                                <button id="submit" onClick={this.pushRows}>Submit</button>  
                                <button id="addBtn" onClick={(event) => this.addRow(event)}>Add another bill</button>
                            </form>
                            
                        </div>
                    </div>
                </div>  
            )
        }
        
}
export default BudgetCalc