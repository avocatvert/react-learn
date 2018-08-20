import React from 'react';
import Person from './Person/Person';


const persons = (props) => {
    let persons_ = null;

    if (props.showPersons){
        persons_ = props.persons.map( (pers, index) => {
            return <Person
                        clicked={() => props.clicked(index)}
                        changed={(event) => props.changed(event, pers.id)}
                        name={pers.name}
                        city={pers.city}
                        key={pers.id}
                    />;
         }
        );
    }

    return persons_;
}


export default persons;