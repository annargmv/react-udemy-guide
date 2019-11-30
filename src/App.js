import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import Person from './Pesron/Person';
// import Radium, {StyleRoot} from 'radium';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   font: interit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer; /*chnages the pointer to something different when hovering on the button*/

//   &:hover { /*radium */ 
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Anna', age: '28'},
      { id: 2, name: 'Alon', age: '31'},
      { id: 3, name: 'Nona', age: '59'}
    ],
    otherState: 'some other value',
    showPersons: false
  };//comes only from the inside property or component. It holdes components internal data

  deletePersonHandler = (personIndex) => {
    //const persons = [...this.state.persons]
    const persons = this.state.persons.slice();
    persons.slice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); 

    const person = {
      ...this.state.persons[personsIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personsIndex] = person; 

    this.setState({persons: persons});
  }

  tooglePersonsHandler = () => {
    const doesnShow = this.state.showPersons;
    this.setState({showPersons: !doesnShow});
  }
  render() {
    const style = {
      // backgroundColor: 'green',
      // font: 'interit',
      // border: '1px solid blue',
      // padding: '8px',
      // cursor: 'pointer', /*chnages the pointer to something different when hovering on the button*/
      // ':hover': { /*radium */ 
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(person ,index)}
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];

    if (this.state.persons.length <= 3) {
      classes.push('red');
    }

    if (this.state.persons.length <= 2) {
      classes.push('bold');
    }
    
    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hey this is Anna</h1>
          <p className={classes.join(' ')}>This is really working</p>   
          {/* <StyledButton alt={this.state.showPersons} onClick={this.tooglePersonsHandler}> */}
          <button className="button" onClick={this.tooglePersonsHandler}>
            Toggle Names
          </button>
          {/* </StyledButton> */}
          {persons}
        </div>
        //</StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hey this is Anna'))
  }
}

// export default App;
// export default Radium(App); // higher order component
export default App; 

// this is the statefull components that contains state management

// use of hooks in react
// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Annushka', age: '28'},
//       { name: 'Alon', age: '31'},
//       { name: 'Nona', age: '59'}
//     ]
//   });
  
//   const [otherState, setPersonsState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Annushka', age: '28'},
//         { name: 'Alon', age: '31'},
//         { name: 'Nona', age: '59'}
//       ]
//      })
//   }

//   return (
//     <div className="App">
//       <h1>Hey this is Anna</h1>
//       <p>This is really working</p>   
//       <button onClick={switchNameHandler}>Switch Names</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobby is photograpy</Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age}/>  
//     </div>
//   );
// }

// export default app; 
