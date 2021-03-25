import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };
  onInputChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
     this.props.onFormSubmit(this.state.term)
    //  console.log(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <label>Video Search</label>
            <br />
            <input
              type="text"
              //   value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
