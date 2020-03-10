import React from "react";
import {Component} from "react";

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    updateNumber1(val) {
        this.setState({ number1: parseInt(val, 10) })
      }
    
    updateNumber2(val) {
        this.setState({ number2: parseInt(val, 10) })
      }
      
    add(num1, num2) {
        let theSum = num1 + num2
        this.setState({sum: theSum})
    }

    render() {
        return (
    <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input type="number" onChange={(e) => this.updateNumber1(e.target.value)} className="inputLine"></input>
        <input type="number" onChange={(e) => this.updateNumber2(e.target.value)} className="inputLine"></input>
        <button onClick={() => this.add(this.state.number1, this.state.number2)} className="confirmationButton">SUM</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
    </div>
        )
    }
}