import React, {PureComponent} from 'react';
import Person from './Person/Person';

// stateless
// const persons = (props) => props.persons.map((person, index) => {
//         return <Person 
//           click={() => props.deletePersonHandler(index)}
//           name={person.name} 
//           age={person.age}
//           key={person.id}
//           changed={(event) => props.nameChangdHandler(event, person.id)}/>
//       });

// stateful
class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() { 
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return <Person 
      click={() => this.props.deletePersonHandler(index)}
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => this.props.nameChangdHandler(event, person.id)}/>
    });
  }
}

export default Persons;
