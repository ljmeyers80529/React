import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Chomper", age: 3},
      {name: "Critter", age: 10},
      {name: "Toffe", age: 1}
      ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is a basic react app.</h1>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Gray and white tabby cat.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
