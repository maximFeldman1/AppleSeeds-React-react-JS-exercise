import React, { Component } from "react";
import Button from "./Btn";

const colors = ["blue", "red", "yellow", ""];

export default class FatherChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color:""
    };
  }

  clickToChange(e){
    this.setState({
      color: e,
    });
  }

  render() {
    return (
      <>
        <div>
          {colors.map((color) => {
            return <Button btn={color} onClickBtn={this.clickToChange} />;
          })}
        </div>

        <div id="color">

        </div>
      </>
    );
  }
}
