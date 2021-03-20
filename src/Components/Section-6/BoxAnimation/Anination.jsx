import React, { Component } from "react";

class Anination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true,
      });
    }, 1000);
  }

  render() {
    return this.state.flag ? <div className="box pop-in"></div> : null;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      removeFlag: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
              removeFlag: true,
                
      });
    }, 4000);
  }

  render(){
      return this.state.removeFlag ? null : (
        <div>
          <Anination />
          <Anination />
          <Anination />
        </div>
      );
  }
}

export default App;