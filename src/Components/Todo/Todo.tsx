import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";
import BtnAddItem from "../TodoAddBtn/BtnAddItem";
import style from "./Todo.module.css";
import TodoInput from "../TodoInput/TodoInput";
import { useState, useEffect } from "react";
import { ListItemsInterface as itemsInterface } from "../Interface/Interface";

const getTime = new Date().toLocaleTimeString();
console.log(getTime);
const resetDataNextDay: string = "23:59:59";

const Todo = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [addedItem, setAddedItem] = useState<itemsInterface[]>([]);

  if (getTime === resetDataNextDay) {
    console.log("matched");
  }

  useEffect(() => {

    if (getTime !== resetDataNextDay) {
      let todoFromFetch = localStorage.getItem("allAddedTodoItem");
      setAddedItem(JSON.parse(todoFromFetch!));
    }
    if (getTime === resetDataNextDay) {
      localStorage.clear();
    }
  }, []);

  useEffect(() => {

    localStorage.setItem("allAddedTodoItem", JSON.stringify(addedItem));
  }, [addedItem]);

  const btnValueHandler = (val: boolean) => {
    setBtnClicked(val);
  };

  // adding the new item in the previous list:

  const inputValHandler = (items: itemsInterface) => {
    setAddedItem((prevItem) => [...prevItem, items]);

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
        <TodoList items={addedItem} />
        {btnClicked === true && <TodoInput getInputVal={inputValHandler} />}

        {btnClicked === false && <BtnAddItem getBtnValue={btnValueHandler} />}
      </div>
    </>
  );
};

export default Todo;
