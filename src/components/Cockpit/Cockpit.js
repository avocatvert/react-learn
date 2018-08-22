import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {

    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <h1> {props.appTitle} </h1>
            <p> This is working !</p>
            <button className={btnClass} onClick={props.clicked}  >
                Toggle persons
            </button>
        </div> 
    )
 
};

export default cockpit;

