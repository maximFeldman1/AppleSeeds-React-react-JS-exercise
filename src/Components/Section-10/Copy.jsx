import React, { Component } from "react";
import { render } from "react-dom";

class Copy extends Component {
  constructor() {
    super();
    this.state = {
      body: "Going h",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>What is the meaning of life</h1>
        <form onSubmit={this.handleSubmit}>
          <strong>Body:</strong>

          <textarea value={this.state.body} onChange={this.handleChange} />

          <input type="submit" value="copy" />
        </form>
      </div>
    );
  }
}

export default Copy
