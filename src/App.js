import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:'romeo', age:32},
      {name:'pauline', age:27},
      {name: 'viny', age:60}
    ],
    otherStates : 'will work on it',
    showPersons : true
  };

  changeNameHandler = (event) => {
    this.setState( 
    {
      persons: [
        {name: event.target.value, age: 32},
        {name:'pauline' ,age: 27 },
        {name: 'viny',age: 60}
      ]
    })
  };

  togglePersonHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState(
      {
        showPersons : doesShow 
      }
    )
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
      <div>
        { this.state.persons.map(p => { 
            return <Person name = {p.name} age = {p.age} />
            } 
          )
        }
       
      </div> )
    }

    return (
      <div className="App">
        <h1> Hi, I' am a React App </h1>
        <p> This is working !</p>
        <button onClick = {this.togglePersonHandler } style={buttonStyle} >
           Toggle persons
        </button>

        {persons} 
        
      </div>
    //React.createElement('div', { className: "App" }, React.createElement('h1', null, 'I will master React'))
    );
  }
}

export default App;