import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: '1ac',name:'romeo', age:32},
      {id: '1ab', name:'pauline', age:27},
      {id: '1ad', name: 'viny', age:60}
    ],
    otherStates : 'will work on it',
    showPersons : false
  };

  changeNameHandler = (event,persId) => {
    const persIndex = this.state.persons.findIndex( (p) => {return p.id === persId;  });
    //const person_match = { ...this.state.persons[persIndex] };  //copy one object person filtered by persIndex
    // add target envent value to that person name;  person_match.name = event.target.value

    const persons_ = [ ...this.state.persons ];
    persons_[persIndex].name = event.target.value;

    //upate state
    this.setState( 
    {
      persons: persons_
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

  deletePersonHandler = (persIndex) => {
    //const persons_ = this.state.persons; // a reference (not a copy)to state.persons (array)
    const persons_ = [...this.state.persons] //or this.state.persons.slice() //will make a copy of the array
    persons_.splice( persIndex,1);
    this.setState({persons : persons_});
  }


  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor : 'lightgreen',
        color:'black'
      }

    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
      <div>
        { this.state.persons.map( (pers,index) => { 
            return <Person 
                    click={() => this.deletePersonHandler(index)} 
                    changedName = {(event) => this.changeNameHandler (event,pers.id) }
                    name = {pers.name} 
                    age = {pers.age} 
                    key = {pers.id}
                    />
            } 
          )
        }
       
      </div> )
      
      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi, I' am a React App </h1>
          <p> This is working !</p>
          <button onClick = {this.togglePersonHandler } style={buttonStyle} >
            Toggle persons
          </button>

          {persons} 
          
        </div>
      </StyleRoot>
    //React.createElement('div', { className: "App" }, React.createElement('h1', null, 'I will master React'))
    );
  }
}

export default Radium(App);