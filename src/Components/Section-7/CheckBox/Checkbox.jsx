import React, { Component } from "react";
import Child from "./Child";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log("render");
    return (
      <>
        <div>
          <Child checkbox={false} text="I read the term of the app" />
          <Child checkbox={false} text="I accept the term of the app" />
          <Child checkbox={true} text="I want to get the weekly news letter" />
          <Child checkbox={true} text="I want to get sales and offers" />
          {/* <label>
            <input
              type="checkbox"
              defaultChecked={this.state.isChecked4}
              onChange={this.toggleChange}
            />
            I want to get sales and offers
          </label> */}{" "}
        </div>
      </>
    );
  }
}
