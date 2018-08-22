import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';
import WithClass from '../../hoc/WithClass';



const cockpit = (props) => {

    let btnClass = classes.Button;
    if (props.showPersons){
        btnClass = classes.Button +" "+ classes.Red;
    }
    return (
        <WithClass classes={classes.Cockpit}>
            <h1> {props.appTitle} </h1>
            <p> This is working !</p>
            <button className={btnClass} onClick={props.clicked}  >
                Toggle persons
            </button>
        </WithClass> 
    )
 
};

export default cockpit;

