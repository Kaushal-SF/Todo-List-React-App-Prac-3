import style from "./TodoList.module.css";
import TodoListItems from "../TodoListItems/TodoListItems";
import { ListItemsInterface } from "../Interface/Interface";

const TodoList: React.FC<{ items: ListItemsInterface[] }> = (props) => {
  return (
    <>
      <div className={style["hero_todo_list"]}>
        {props.items.length === 0 && (
          <p className={style.emptyMsg}>Looks like Empty</p>
        )}
        {props.items.map((data) => {
          return <TodoListItems key={data.id} title={data.title} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
