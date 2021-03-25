// import Boxes from "./Components/Section3/Boxes/Boxies";
// import './Components/Section3/Boxes/style.css'
// import Quiz from './Components/Section3/Quizies/Quiz'
// import './Components/Section3/Quizies/styleQuiz.css'
// import Btn from './Components/Section3/Button/Btns'
// import './Components/Section3/Button/btnstyle.css'
// import Cardies from './Components/Section3/Card/Cards'
// import "./Components/Section3/Card/cardstyle.css";
// import Counter from './Components/Section-5/Increment/Increment'
// import Lifecycle from "./Components/Section-6/LifeCycleMethods/Lifecycle"
// import Animation from "./Components/Section-6//BoxAnimation/Anination"
// import './Components/Section-6/BoxAnimation/boxstyle.css'
// import Button from "./Components/Section-7/ParentChild/CustomButton";
// import Checkbox from './Components/Section-7/CheckBox/Checkbox'
// import Form from "./Components/Section-7/Formreview/Form";

// import Copy from "./Components/Section-10/Copy";
// import Focus from "./Components/Section-10/Focus";
import Products from "./Components/Section-20/React-Router/AllProducts";

// import ChuckNoris from "./Components/Section-8-Api/Chuck_Noris/ChuckNoris";

// import Utility from "./Components/Section-8-Api/Data_massaging/Utility";

function App() {
  return (
    // <div><Boxes /></div>
    // <div><Quiz/></div>
    // <div><Btn/></div>
    // <div><Cardies/></div>
    // <div><Counter/></div>
    // <div><Lifecycle/></div>
    // <div><Animation/></div>
    // <div><Button /></div>
    // <div><Checkbox/></div>
    // <div><Form/></div>
    // <div><ChuckNoris /></div>
    // <div><Utility/></div>
    // <div><Focus/></div>
    // <div><Copy/></div>
    <div><Products/></div>

  );
}

export default App
// import SearchBar from "./Components/MiniProjectReact/SearchBar";
// import React, { Component } from "react";
// import YoutubeApi from "./Components/MiniProjectReact/Apis/YoutubeApi";
// import VideoList from "./Components/MiniProjectReact/VideoList";

// export default class App extends Component {
//   state = {
//     video: [],
//   };
//   onTermSubmit = async (term) => {
//     const response = await YoutubeApi.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({
//       video: response.data.items,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="ui container">
//           <SearchBar onFormSubmit={this.onTermSubmit} />
//           <VideoList video={this.state.video}/>
//         </div>
//       </div>
//     );
//   }
// }
