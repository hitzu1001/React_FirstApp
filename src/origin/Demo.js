import React, {Component} from 'react';

class Demo extends Component {
  constructor(props) {
    //super();  // use when props are not required in constructor
    super(props); // good practice
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>DEMO COMPONENT!</h1>
        <h1>{this.props.animal}</h1>
      </div>
    );
  }
}

export default Demo;
