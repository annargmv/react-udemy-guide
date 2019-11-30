import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // let classes = ['red', 'bold'].join(' ');
    let assignedClasses = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = classes.Red;
    }
    if (props.persons.length <= 3) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>   
            {/* <StyledButton alt={this.state.showPersons} onClick={this.tooglePersonsHandler}> */}
            <button className={buttonClass} onClick={props.clicked}>
                Toggle Names
            </button>
        </div>
    );
};

export default cockpit;