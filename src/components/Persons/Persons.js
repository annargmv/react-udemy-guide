import React from 'react';
import Person from './Pesron/Person';

const persons = (props) => props.persons.map((person, index) => {
        return <Person 
          clicked={() => props.click(person ,index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => props.changed(event, person.id)}/>
    });

export default persons;