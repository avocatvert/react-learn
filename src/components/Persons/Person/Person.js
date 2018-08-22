import React  from 'react';
import Styles from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';


const person = (props) => { 
 
    return (
    <WithClass classes= {Styles.Person} >
        <p onClick={props.clicked}> My name is {props.name}, my city is {props.city} </p> 
        <p> {props.children} </p> 
        <input type='text' onChange={props.changed} value = {props.name}/>
    </WithClass>
    );
};


person.propTypes = {
    clicked : PropTypes.func,
    name: PropTypes.string,
    city: PropTypes.string,
    changed: PropTypes.func
};

export default person;