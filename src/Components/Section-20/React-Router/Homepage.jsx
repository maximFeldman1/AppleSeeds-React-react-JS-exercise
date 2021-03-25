import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
class Homepage extends Component {
  render() {
    return (
      <div>
        <p>This is my beautiful landing page</p>
        <Link to="/"></Link>
      </div>
    );
  }
}

export default Homepage;
