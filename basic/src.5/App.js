import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a basic react app.</h1>
        <Person name="Chomper" age="3"/>
        <Person name="Critter" age="10">Gray and white tabby cat.</Person>
        <Person name="Toffe" age="1"/>
      </div>
    );
  }
}

export default App;
