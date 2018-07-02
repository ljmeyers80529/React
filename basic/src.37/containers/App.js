import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../highOrderComponent/WithClass';
import Aux from '../highOrderComponent/Aux1';
import withClass from '../highOrderComponent/withClass1';

export const AuthContext = React.createContext(false);
class App extends PureComponent {

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPerson !== this.state.showPerson;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {    // react 16.3+
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  };

  getSnapshotBeforeUpdate() {
    console.log('[App.js] Inside getSnapshotBeforeUpdate()');
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
      showPerson: false,
      toggleClickedCounter: 0,
      authenticated: false
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
    this.setState((prevState,props) => {
      return {
      showPerson: !showX, 
        toggleClickedCounter: prevState.toggleClickedCounter+1
      }
    });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
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
      <Aux>
        <button onClick={() => {this.setState({showPerson: true})}}>Show persons</button>
        <Cockpit
          appTitle = {this.props.title}       // requires 'this' since within a class.
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
