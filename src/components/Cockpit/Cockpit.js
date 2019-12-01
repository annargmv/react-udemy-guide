import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js]', 'useEffect' );
        //http requests..
        setTimeout(()=> {
            alert('Saved data to the cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js]', 'cleanup' );
        }
    }, [props.persons]);

    let assignedClasses = [];
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = classes.Red;
    }
    if (props.personsLength <= 3) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 2) {
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

export default React.memo(cockpit);