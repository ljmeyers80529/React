import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

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
    let persons = null;
    let btnClass = '';

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
        </div>
      );

      btnClass = classes.Red;

    }

    // let classes = ['pColor', 'pBold'].join(' ');       // css class name.
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.pColor);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.pBold);
    }

    return (
      <div className={classes.App}>
        <h1>This is a basic react app.</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button 
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
