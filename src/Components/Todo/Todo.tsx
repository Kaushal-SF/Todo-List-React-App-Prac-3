import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";
import BtnAddItem from "../TodoAddBtn/BtnAddItem";
import style from "./Todo.module.css";
import TodoInput from "../TodoInput/TodoInput";
import { useState, useEffect } from "react";
import { ListItemsInterface as itemsInterface } from "../Interface/Interface";

const getTime = new Date().toLocaleTimeString();
console.log(getTime);
const resetDataNextDay: string = "17:46:40";

const Todo = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [todoItem, setTodoItem] = useState<itemsInterface[]>([]);

  useEffect(() => {
    // getting the set item on local storage :
    let getTodoItem = localStorage.getItem("allAddedTodoItem");

    if (getTime !== resetDataNextDay) {
      setTodoItem(JSON.parse(getTodoItem!));
    }
    // If time matches then we will remove items from local storage :
    else if (getTime === resetDataNextDay) {
      console.log("matched");
      setTodoItem([]);
      localStorage.removeItem("allAddedTodoItem");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allAddedTodoItem", JSON.stringify(todoItem));
  }, [todoItem]);

  const btnValueHandler = (val: boolean) => {
    setBtnClicked(val);
  };

  // adding the new item in the previous list:

  const inputValHandler = (items: itemsInterface) => {
    setTodoItem((prevItem) => [...prevItem, items]);

    setBtnClicked(false);
  };

  // Escape key Handler:

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      setBtnClicked(false);
    }
  });

  return (
    <>
      <div className={style["hero_main"]}>
        <TodoDate />
        <TodoList items={todoItem} />
        {btnClicked === true && <TodoInput getInputVal={inputValHandler} />}

        {btnClicked === false && <BtnAddItem getBtnValue={btnValueHandler} />}
      </div>
    </>
  );
};

export default Todo;
