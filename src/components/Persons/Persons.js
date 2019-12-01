import React, { Component } from 'react';
import Person from './Pesron/Person';

class Persons extends Component { 
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  //let React know if a component’s output is not affected by the 
  //current change in state or props. The default behavior is to
  //re-render on every state change, and in the vast majority of 
  //cases you should rely on the default behavior.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
    
  }

  //is invoked right before the most recently rendered output is committed to e.g. 
  //the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) 
  //before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter 
  //to componentDidUpdate().
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  //is invoked immediately after updating occurs. This method is not called for the initial render.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  
  //is invoked immediately before a component is unmounted and destroyed. 
  //Perform any necessary cleanup in this method, such as invalidating timers, 
  //canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  componentWillUnmount() {
    console.log('[Persons.js]', 'componentsWillUnmount' );
  }
  
  render () {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return <Person 
      clicked={() => this.props.click(person ,index)}
      name={person.name} 
      age={person.age} 
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}    

export default Persons;