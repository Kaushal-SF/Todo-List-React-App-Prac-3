import { useState } from "react";
import style from "./NewInput.module.css";
import { ListItemsInterface } from "../Interface/Interface";

const NewInput: React.FC<{
  onEnterPress: (arg: ListItemsInterface) => void}> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event: React.FormEvent) => {
    setEnteredTitle((event.target as HTMLInputElement).value);
  };

  // when user press  enter key then send data to parent via props:

  const enterKeyHandler = (event: React.KeyboardEvent) => {
    let enteredUserValue = (event.target as HTMLInputElement).value;
    // setEnteredTitle(enteredUserValue);

    if (event.key === "Enter") {
      if (enteredUserValue.trim().length === 0) {
        alert("Please enter something...");
      } else {
        const enteredInputVal = {
          title: enteredTitle,
        };

        props.onEnterPress(enteredInputVal);
      }
    }
  };

  return (
    <>
      <input
        className={style.input}
        type="text"
        placeholder="  Your Title..."
        value={enteredTitle}
        onChange={titleChangeHandler}
        onKeyUp={enterKeyHandler}
      />
    </>
  );
};
export default NewInput;
