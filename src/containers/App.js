import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';

class App extends Component {

  state = {
    persons: [
      {id: '1ac',name:'romeo', city:'Montreal'},
      {id: '1ab', name:'pauline', city:'Ottawa'},
      {id: '1ad', name: 'viny', city:'Yaounde'}
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
   

    return (
        <Aux>
          <Cockpit 
            appTitle = {this.props.title}
            clicked = {this.togglePersonHandler}
            showPersons = {this.state.showPersons}
          />

          <Persons 
            showPersons ={this.state.showPersons}
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed= {this.changeNameHandler}
          /> 
        </Aux>
     
    //React.createElement('div', { className: "App" }, React.createElement('h1', null, 'I will master React'))
    );
  }
}

export default App;