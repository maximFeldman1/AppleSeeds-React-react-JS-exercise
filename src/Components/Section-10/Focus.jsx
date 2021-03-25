import React, { Component } from "react";

export default class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.inputRef = React.createRef();
  }

  handleClick = () => {
   this.setState({
     value: this.inputRef.current.value,
   });
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <form className="focus">
          <label>Input: </label>
          <input type="text" ref={this.inputRef}></input>
          <button onClick={this.handleClick}>Search</button>
          <h4>{this.state.value}</h4>
        </form>
      </div>
    );
  }
}
