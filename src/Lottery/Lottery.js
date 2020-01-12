import React, { Component } from 'react';
import LotteryBall from './LotteryBall'
import './Lottery.css'

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBall: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBall }) };
    this.handleClick = this.handleClick.bind(this);
  }

  // draw() {
  //   this.setState(curState => ({
  //     nums: curState.nums.map(
  //       n => Math.floor(Math.random() * this.props.maxNum) + 1
  //     )
  //   })); 
  // }
  
  draw() {
    let numArr = [];
    for(let i = 0; i < this.props.maxNum; i++) {
      numArr[i] = i + 1;
    }
    
    this.setState(curState => ({
      nums: curState.nums.map(
        n => numArr.splice(Math.floor(Math.random() * numArr.length), 1)[0]
      )
    })); 
  }

  handleClick() {
    this.draw();
  }
  
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <LotteryBall num={n}/>)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}

export default Lottery;