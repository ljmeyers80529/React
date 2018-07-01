import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../highOrderComponent/Aux';

const cockpit = (props) => {
  // let classes = ['pColor', 'pBold'].join(' ');       // css class name.
  const assignedClasses = [];

  let btnClass = classes.Button;

  if (props.showPerson) {
     btnClass = [classes.Button, classes.Red].join(' ');
    }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.pColor);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.pBold);
  }

    return (
        <Aux>
          <h1>{props.appTitle}</h1>
          <p className={assignedClasses.join(' ')}>This is working!</p>
          <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );
};

export default cockpit;