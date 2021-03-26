import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/products"> Products</Link>
        <p>This is my beautiful landing page</p>
      </div>
    );
  }
}

export default Header;
