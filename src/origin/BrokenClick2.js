import React, { Component } from 'react'

class BrokenClick2 extends Component {
  //remove constructor
  state = {clicked: false} 
  
  // use arrow to associate "this" in handleClick to CURRENT class
  handleClick = e => {
    this.setState({ clicked: true })
  }
  // handleClick = () => {
  //   this.setState({ clicked: true })
  // }
  
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'CLICKED!!!' : 'NOT CLICKED'}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }

}

export default BrokenClick2;