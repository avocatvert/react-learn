import React  from 'react';
import './Person.css';

const person = (props) => { 
    return (
    <div className= "Person">
        <p> My name is {props.name}, i am {props.age} years old </p> 
        <p> {props.children} </p> 
        <input type='text' onChange={props.namechanged} value = {props.name}/>
    </div>
    );
};

export default person;