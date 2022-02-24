import React from "react";
import style from "./TodoInput.module.css";
import { ListItemsInterface } from "../Interface/Interface";
import NewInput from "./NewInput";

const TodoInput: React.FC<{
  getInputVal: (arg: ListItemsInterface) => void;}> = (props) => {

  const saveEnterInput = (enteredUserValue: ListItemsInterface) => {
    const enteredVal = {
      ...enteredUserValue,
      id: Math.floor(Math.random() * 1000000000)
    };

    props.getInputVal(enteredVal);
  };

  return (
    <>
      <div className={style.heroInput}>
        <NewInput onEnterPress={saveEnterInput} />
      </div>
    </>
  );
};

export default TodoInput;
