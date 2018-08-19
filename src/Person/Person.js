import React  from 'react';
//import Radium from 'radium';
import './Person.css';

const person = (props) => { 
 
    return (
    <div className= "Person" >
        <p onClick={props.click}> My name is {props.name}, i am {props.age} years old </p> 
        <p> {props.children} </p> 
        <input type='text' onChange={props.changedName} value = {props.name}/>
    </div>
    );
};

export default person;