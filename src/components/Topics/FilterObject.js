import React from "react";
import {Component} from "react";

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                { "name": "Derek", "species": "Human", "age": 34 }, 
                { "name": "Meghan", "gender": "Female", "age": 33 }, 
                { "name": "Eloise", "age": 2, "face": "Cute" }, 
                { "name": "Leo", "species": "Dog" } ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    filterArray(userInput) {
        let filtered = [];
        let unfiltered = this.state.unFilteredArray;
        for (let i = 0; i < unfiltered.length; i++){
          if (unfiltered[i][`${userInput}`]) {
            filtered.push(unfiltered[i])
          }
        }
        this.setState({filteredArray: filtered})
      }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input onChange={(e) => this.handleChange(e.target.value)} className="inputLine"></input>
                <button onClick={() => this.filterArray(this.state.userInput)} className="confirmationButton">Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}