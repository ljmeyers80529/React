import React from 'react';
import classes from './Cockpit.css'


const cockpit = (props) => {
  // let classes = ['pColor', 'pBold'].join(' ');       // css class name.
  const assignedClasses = [];

  let btnClass = '';

  if (props.showPerson) {
     btnClass = classes.Red;
    }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.pColor);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.pBold);
  }

    return (
        <div className={classes.Cockpit}>
        <h1>This is a basic react app.</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;