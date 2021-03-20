import React, { Component } from "react";

export default class Btn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.btn,
    };
  }

  onClickBtn = (e) => {
    this.props.onClickBtn(e.target.textContent);
  };
  render() {
    return (
      <>
        <div>
          <button
            style={{ backgroundColor: "this.state.color" }}
            onClick={this.onClickBtn}
          >
            {this.state.color}
          </button>
        </div>
      </>
    );
  }
}
