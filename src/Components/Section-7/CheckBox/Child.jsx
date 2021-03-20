import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: this.props.checkbox,
    };
  }
  toggleChange = (e) => {
    this.setState({
      isCheck: e.target.defaultChecked
    });
  };

  render() {
      console.log(this.state)
    return (
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={this.state.isCheck}
            onChange={this.toggleChange}
          />
          {this.props.text}
        </label>
      </div>
    );
  }
}
