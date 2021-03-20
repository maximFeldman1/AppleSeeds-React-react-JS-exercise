import React, { Component, createRef } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "blue",
    };

    this.ref = createRef();
  }

  componentDidMount() {
    //   let colorId = document.querySelector('#update')
    setTimeout(() => {
      this.setState({
        favoriteColor: "red",
      });
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector(
      "#update"
    ).innerHTML = `The update color ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        {/* <h1 style={color:this.state.favoriteColor}></h1> */}
        <div id="update"></div>
      </div>
    );
  }
}

export default Lifecycle;
