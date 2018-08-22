import React  from 'react';
//import Radium from 'radium';
import Styles from './Person.css';

const person = (props) => { 
 
    return (
    <div className= {Styles.Person} >
        <p onClick={props.clicked}> My name is {props.name}, my city is {props.city} </p> 
        <p> {props.children} </p> 
        <input type='text' onChange={props.changed} value = {props.name}/>
    </div>
    );
};

export default person;