import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  // const data = ["hello", "world"];
  // const number1 = 5;
  // const number2 = 6;
  // let temp = number1 + number2
  const string = "I love React";
  let length = string.length;

  return (
    // data.join(' ')
    // temp
    getfun(length)
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

function getfun(lenght) {
  return "The string’s length is :" + lenght;
}

export default App