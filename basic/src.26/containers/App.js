import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }



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
    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPerson) {
      persons = (
          <Persons
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            nameChangdHandler={this.nameChangdHandler}
            />
      );

    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle = {this.props.title}       // requires 'this' since within a class.
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
