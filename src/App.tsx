import Todo from "./Components/Todo/Todo";
import style from "./App.module.css";
import { Component } from "react";

class App extends Component {
  render() {
    return ( <>
      <div className={style.App}>
        <Todo />
      </div>
    </>)
   
  };
}
export default App;
