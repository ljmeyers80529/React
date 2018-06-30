import React, {Component} from 'react';
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
class Persons extends Component {
  render() { 
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
