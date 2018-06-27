import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Chomper", age: 3},
      {name: "Critter", age: 10},
      {name: "Toffe", age: 1}
      ],
      otherState: false
  };

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 5},
        {name: "Critter", age: 10},
        {name: "Toffe", age: 1}
        ]}
      );
  };

  nameChangdHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Chomper', age: 5},
        {name: event.target.value, age: 10},
        {name: "Toffe", age: 1}
        ]}
      );    
  };

  render() {
    return (
      <div className="App">
        <h1>This is a basic react app.</h1>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Nuzzy')}>Switch name</button>   -- perferred */}
        <button onClick={() => this.switchNameHandler('Thor')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Goldy Bear')}
          changed={this.nameChangdHandler}>Gray and white tabby cat.</Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
