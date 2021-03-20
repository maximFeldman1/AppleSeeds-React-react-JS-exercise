import React, { Component } from "react";
import FormReview from './Form'
const serverUsers = [];
export default class Child extends Component {
    
  constructor(props) {
    super(props);

    this.state = {};
    
  }

  displayFormDetails = async (userDetails) => {
    await this.setState(userDetails);
    console.log(this.state);
  };

  handleAddRequest = async (addUser) => {
    if (addUser) {
      serverUsers.push(this.state);
      await this.setState(this.initState);
    } else {
      await this.setState(this.state);
    }
  };

  componentDidMount() {
    this.initState = this.state;
  }

  render() {
    return (
      <div>
        <FormReview
          getFormDetails={this.displayFormDetails}
          userDetails={this.state}
        />
      </div>
    );
  }
}
