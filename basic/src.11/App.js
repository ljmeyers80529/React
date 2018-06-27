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
      otherState: false,
      showPerson: false
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

  togglePersonsHandler = () => {
    let showX = this.state.showPerson;
    this.setState({showPerson: !showX});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is a basic react app.</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Switch name</button>

        {
          this.state.showPerson ? 
        <div>
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
        </div> : null
        }

      </div>
    );
  }
}

export default App;
