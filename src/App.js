import React, { Component } from 'react';
import './App.css';
import Person from './Pesron/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey this is Anna</h1>
        <p>This is really working</p>   
        <Person />  
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hey this is Anna'))
  }
}

export default App;
