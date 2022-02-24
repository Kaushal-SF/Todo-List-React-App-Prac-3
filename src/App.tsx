import Todo from "./Components/Todo/Todo";
// import Todo1 from "./Components/Todo/Todo1";
import style from "./App.module.css";
import { Component } from "react";

class App extends Component {
  render() {
    return ( <>
      <div className={style.App}>
        {/* <Todo1 /> */}
        <Todo />
      </div>
    </>)
   
  };
}
export default App;
