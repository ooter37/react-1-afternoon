import React from "react";
import {Component} from "react";

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    solver(userInput) {
        let array = userInput.split('')
        let reversed = array.slice().reverse()
        let arrayString = array.join('')
        let reversedString = reversed.join('')
        if (arrayString === reversedString) {
            this.setState({palindrome: 'THATS A PALINDROME'})
        } else {
            this.setState({palindrome: 'nah'})
        }   
    }

    render() {
        return (
    <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"></input>
        <button onClick={() => this.solver(this.state.userInput)} className="confirmationButton">Palindrome Verification System</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
    </div>
        )
    }
}