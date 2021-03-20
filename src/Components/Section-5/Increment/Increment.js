import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  upBtn = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  downBtn = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div>
        <button type="text" onClick={this.upBtn}>
          {"+"}
        </button>
        {this.state.counter}
        <button type="text" onClick={this.downBtn}>
          {"-"}
        </button>
      </div>
    );
  }
}

export default Increment;
