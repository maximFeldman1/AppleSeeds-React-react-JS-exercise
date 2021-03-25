import Data from "./Data";
import React, { Component } from "react";
import data from "./Data";

export default class Utility extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
    };
  }

  componentDidMount() {
      this.state.data.map((d)=>{
          console.log(d.name)
      })

       let birthday = this.state.data.filter((d) => {
            return d.birthday.substring(-1) < 1990
       });

       console.log(birthday)

  }
  render() {
    
    return (
      <>
        <div>

        </div>
      </>
    );
  }
}
