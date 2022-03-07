import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";
import BtnAddItem from "../TodoAddBtn/BtnAddItem";
import style from "./Todo.module.css";
import TodoInput from "../TodoInput/TodoInput";
import { useState, useEffect } from "react";
import { ListItemsInterface as itemsInterface } from "../Interface/Interface";

let getTime = new Date().toLocaleTimeString();
const timeToResetStorage = "10:15:30";
// const timeToResetStorage = "23:59:59";

const Todo = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [todoItem, setTodoItem] = useState<itemsInterface[]>([]);
  const [currTime, setCurrTime] = useState(getTime);

  // to get the latest updated time in "currTime" state:

  useEffect(() => {
    const interval = setTimeout(() => {
      getTime = new Date().toLocaleTimeString();
      setCurrTime(getTime);
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [currTime]);

  // if currTime and provided reset time matches data will be removed else it stores as it is there :

  useEffect(() => {
    const items = localStorage.getItem("allAddedTodoItem");
    if (currTime !== timeToResetStorage) {
      setTodoItem(JSON.parse(items!));
    } else {
      setTodoItem([]);
      localStorage.removeItem("allAddedTodoItem");
    }
  }, [currTime]);

  // when any changes happen in todoItem this useEffect will run again :

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
