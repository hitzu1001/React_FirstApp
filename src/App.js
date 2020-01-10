import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick'
import BrokenClick2 from './BrokenClick2'
import Clicker from './Clicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game />
        <BrokenClick />
        <BrokenClick2 /> */}
        <Clicker />
      </div>
    )
  }
}

export default App;