import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
// import WithClass from '../../../highOrderComponent/WithClass';
import withClass from '../../../highOrderComponent/withClass1';
import Aux from '../../../highOrderComponent/Aux1';


// const person = (props) => {
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };


class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
        this.inputElement = React.createRef();  // 16.3+
      }
    
      componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0) {
        this.inputElement.current.focus();  // 16.3+
        }
      }

      focus() {
        this.inputElement.current.focus();
      }

      render() {
        console.log('[Person.js] Inside render()');
        return (
        <Aux>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input 
              ref = {this.inputElement}     // 16.3+
              type="text" 
              onChange={this.props.changed} 
              value={this.props.name} />
        </Aux>
        )
    };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
