import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "fdkfe7", name: "Chomper", age: 3},
      {id: "bndisd", name: "Critter", age: 10},
      {id: "pdekf8r34", name: "Toffe", age: 1}
      ],
      otherState: false,
      showPerson: false
  };

  nameChangdHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); 
    persons.splice(personIndex,1);
    this.setState({persons:persons});
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

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangdHandler(event, person.id)}/>
          })}

          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Goldy Bear')}
            changed={this.nameChangdHandler}>Gray and white tabby cat.</Person>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a basic react app.</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
