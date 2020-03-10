import React from "react";
import {Component} from "react";

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }

    assignEvenAndOdd(userInput) {
        let bigArray = userInput.split(',');
        let evens = [];
        let odds = [];
        for (let i=0; i < bigArray.length; i++) {
            if (bigArray[i] % 2 === 0) {
                evens.push(bigArray[i])
            } else  {
                odds.push(bigArray[i])
            }
        }
        this.setState({evenArray: evens})
        this.setState({oddArray: odds})
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <p>Even and Odd</p>
                <h4>Evens and Odds</h4>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"></input>
                <button className="confirmationButton" onClick={ () => this.assignEvenAndOdd(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}
