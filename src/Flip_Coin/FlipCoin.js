import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helper';

class FlipCoin extends Component {
  static defaultProps = {
    coins: [
      {side: 'head', src: "http://www.cruzis-coins.com/Kangaroos/1999om.jpg"},
      {side: 'tail', src: "http://www.cruzis-coins.com/Kangaroos/1999rm.jpg"}
    ]
  }

  constructor(props) {
    super(props)
    this.state = { 
      currCoin: null, 
      numFlips: 0, 
      numHead: 0, 
      numTail: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  flip() {
    const newCoin = choice(this.props.coins);
    this.setState(st => { 
      return {
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHead: st.numHead + (newCoin.side === 'head' ? 1 : 0),
        numTail: st.numTail + (newCoin.side === 'tail' ? 1 : 0)
      }
    });
  }

  handleClick() {
    this.flip();
  }

  render() {   
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <div>
          {this.state.currCoin && <Coin info={this.state.currCoin} />}
        </div>
        <button onClick={this.handleClick}>FLIP ME!</button>
        <p>Out of {this.state.numFlips} flips, there have been {this.state.numHead} heads and {this.state.numTail} tails.</p>
      </div>
    )
  }
}

export default FlipCoin;