import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";
import BtnAddItem from "../TodoAddBtn/BtnAddItem";
import style from "./Todo.module.css";
import TodoInput from "../TodoInput/TodoInput";
import { useState } from "react";
import { ListItemsInterface as itemsInterface } from "../Interface/Interface";

const todoItems: itemsInterface[] = [
  { id: 1, title: "Buy new Sweatshirt" },
  { id: 2, title: "Buy old Sweatshirt" },
  { id: 3, title: "Read ana article" },
  { id: 4, title: "watch 'sherlock'" },
  { id: 5, title: "Go for a walk" },
  // { id: 6, title: "Buy Sweatshirt" },
  // { id: 7, title: "watch 'sherlock'" },
  // { id: 8, title: "Read ana article" },
  // { id: 9, title: "Go for a walk" },
];

const Todo = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [addItem, setAddItem] = useState(todoItems);

  const btnValueHandler = (val: boolean) => {
    setBtnClicked(val);
  };

  // adding the new item in the previous list:

  const inputValHandler = (items: itemsInterface) => {
    setAddItem((prevState) => {
      return [...prevState, items];
    });
    setBtnClicked(false);
  };

  // Escape key Handler:

  document.addEventListener('keyup', (e) => {
    if(e.key === "Escape"){
      setBtnClicked(false);
    }
  })

  return (
    <>
      <div className = {style["hero_main"]}>
        <TodoDate />
        <TodoList items = {addItem} />
        {btnClicked === true && <TodoInput getInputVal = {inputValHandler} />}

        {btnClicked === false && <BtnAddItem getBtnValue = {btnValueHandler} />}
      </div>
    </>
  );
};

export default Todo;
