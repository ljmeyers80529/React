import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: "Me1", age:20},
            {name: "Me2", age:27},
            {name: "Me3", age:33}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({persons: [
            {name: "Me1", age:20},
            {name: newName, age:51},
            {name: "Me3", age:33}
        ]});
        // this.state.persons[1].name = "Me5";
    };

    nameChangedHandler = (event) => {
        this.setState({persons: [
            {name: "Me1", age:20},
            {name: event.target.value, age:13},
            {name: "Me3", age:51}
        ]});
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
            <div className = "App" >
                <h1> This is a react app updated! </h1>
                <p> This is really working!</p>

                <button 
                    style = {style}
                    onClick={this.switchNameHandler.bind(this, "Me6")}>Switch name</button>             {/*use this.*/}
                {/* <button onClick={() => this.switchNameHandler("Me6")}>Switch name</button>                  // can be ineffcient. */}

                {/* <Person name="Me1" age="20">XXX3</Person>
                <Person name="Me2" age="27">XXX2</Person>
                <Person name="Me3" age="33">XXX1</Person> */}

                <Person 
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>XXX3</Person>
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Me7")}
                    changed={this.nameChangedHandler}>XXX2</Person>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}>XXX1</Person>
            </div>
        );
    }
}

export default App;
