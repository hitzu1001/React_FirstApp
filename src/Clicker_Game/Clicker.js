import React, { Component } from 'react'
import  './Clicker.css'

class Clicker extends Component {
  constructor(props) {
    super(props) 
    this.state = {num: 1}
    this.genRandom = this.genRandom.bind(this)
  }

  genRandom(e) {
    let randNum = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: randNum })
  }

  render() {
    // console.log(this.state.num)
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.num === 7 
          ? <h2>YOU WIN!</h2> 
          : <button onClick={this.genRandom}>Random Number</button> 
        }
        
        {/* <h2 className={this.state.num === 7 ? "Clicker-winP" : "Clicker-loseP"}>
          YOU WIN!
        </h2>
        <button 
          className={this.state.num === 7 ? "Clicker-winBtn" : "Clicker-loseBtn"}onClick={this.genRandom}>
            Random Number
        </button> */}
      </div>
    )
  }
  
}

export default Clicker;