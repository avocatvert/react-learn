import React  from 'react';
//import Radium from 'radium';
import personStyles from './Person.css';
import './Person.css';

const person = (props) => { 
 
    return (
    <div className= {personStyles.Person} >
        <p onClick={props.click}> My name is {props.name}, my city is {props.city} </p> 
        <p> {props.children} </p> 
        <input type='text' onChange={props.changedName} value = {props.name}/>
    </div>
    );
};

export default person;