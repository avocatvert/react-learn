import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name:'romeo', age:32},
      {name:'pauline', age:27},
      {name: 'viny', age:60}
    ]
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

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    return (
      <div className="App">
        <h1> Hi, I' am a React App </h1>
        <p> This is working !</p>
        <button onClick = {this.swithNameHandler } style={buttonStyle} >
           click to swap persons
        </button>

        <Person 
          namechanged = {this.changeNameHandler}
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age} 
        />
        <Person 
          namechanged = {this.changeNameHandler}
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
        />
        <Person 
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age} 
        />
      </div>
    //React.createElement('div', { className: "App" }, React.createElement('h1', null, 'I will master React'))
    );
  }
}

export default App;