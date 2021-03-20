import React, { Component } from "react";
// import Child from "./ChildOfForm";
export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      freeText: "",
    };
  }

  hundleFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  hundleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  hundleFreeTextChange = (e) => {
    this.setState({ freeText: e.target.value });
  };

  hundleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };

  hundleSubmit = (e) => {
    e.preventDefault();
    this.props.getFormDetails(this.state);
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.hundleSubmit}>
            <label for="fname">First name:</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              value={this.state.firstName}
              onChange={this.hundleFirstName}
            />
            <br />
            <label for="lname">Last name:</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              value={this.state.lastName}
              onChange={this.hundleLastName}
            />
            <br />
            <label for="lname">Age:</label>
            <br />
            <input
              type="number"
              max="100"
              value={this.state.age}
              onChange={this.hundleAgeChange}
            ></input>
            <br />
            <label for="subject" value={this.state.freeText}>
              Free text
            </label>
            <br />
            <textarea
              value={this.state.freeText}
              onChange={this.hundleFreeTextChange}
            ></textarea>
            <input type={"submit"} value={"continue"} />
          </form>
        </div>
      </>
    );
  }
}
