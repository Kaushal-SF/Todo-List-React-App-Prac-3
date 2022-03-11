import style from "./TodoListItems.module.css";
import { ListItemsInterface } from "../../../Interface/Interface";
import { useState } from "react";

const TodoItems = (props: ListItemsInterface) => {
  const [ischecked, setIschecked] = useState(false);

  const checkedHandler = () => {
    setIschecked(!ischecked);
  };

  return (
    <>
      <div className={style["hero_items"]}>
        <div
          className={`${style.todoItems} ${
            ischecked && style["todoItems_Checked"]
          }`}
        >
          {props.title}
        </div>
        <button
          id="btn_check"
          className={` ${style.button} ${ischecked && style["btn_checked"]}`}
          onClick={checkedHandler}
        ></button>
      </div>
    </>
  );
};

export default TodoItems;
