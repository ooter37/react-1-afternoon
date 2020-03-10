import React from "react";
import {Component} from "react";

export default class FilterString extends Component {
    
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['taco', 'beef taco', 'house', 'car', 'snow', 'big'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    filterArray(userInput) {
        let unfiltered = this.state.unFilteredArray
        let filtered = []
        for (let i = 0; i < unfiltered.length; i++) {
            if (!unfiltered[i].includes(userInput)) { 
                filtered.push(unfiltered[i])
            }
        }
        this.setState({filteredArray: filtered})
    }
    //Directions unclear on this toy problem. If filtering for "taco", should the returned array include "beef taco"?
    //If not, replace 'if (!unfiltered[i].includes(userInput))' with 'if (unfiltered[i] !== userInput)'
    render() {
        return (
    <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"> Strings: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
        <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"></input>
        <button onClick={() => this.filterArray(this.state.userInput)} className="confirmationButton">Filter String</button>
        <span className="resultsBox filterStringRB"> Filtered Strings: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
    </div>
        )
    }
}