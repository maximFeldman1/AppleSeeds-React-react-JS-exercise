import React, { Component } from "react";
import axios from "axios";

export default class ChuckNoris extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      categories : []
    };
  }

  async componentDidMount() {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    const category = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    // console.log(response.data.value);
    this.setState({
      jokes: response.data.value,
      category: category.data,
    });
    // this.randomJoke(response.data.value);
  }

  displayJokes = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({
      jokes: response.data.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <br />
          <button onClick={this.displayJokes}>Click</button>
          <h4>{this.state.jokes}</h4>
        </div>

        <div>
          <select name="cars" id="cars">
            <option value="animal">animal</option>
            <option value="career">career</option>
            <option value="celebrity">celebrity</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
          </select>
        </div>
      </div>
    );
  }
}
