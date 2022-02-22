import { useState } from "react";
import style from "./NewInput.module.css";
import { ListItemsInterface } from "../Interface/Interface";

const NewInput: React.FC<{
  onEnterPress: (arg: ListItemsInterface) => void;
}> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event: React.FormEvent) => {
    setEnteredTitle((event.target as HTMLInputElement).value);
  };

  // when user press  enter key then send data to parent via props:

  const enterKeyHandler = (event: React.KeyboardEvent) => {
    let enterdUserValue = (event.target as HTMLInputElement).value;
    setEnteredTitle(enterdUserValue);

    if (event.key === "Enter") {
      if(enterdUserValue.trim().length <= 0){
        alert("Enter something");
      }

      else {

      const enterdInputVal = {
        title: enteredTitle,
      };

      props.onEnterPress(enterdInputVal);
    } 
  }
}

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
