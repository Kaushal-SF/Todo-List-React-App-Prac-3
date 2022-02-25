import style from "./BtnAddItem.module.css";

const BtnAddItem: React.FC<{ getBtnValue: (arg: boolean) => void }> = (props) => {
  const onAddItem = () => {
    return props.getBtnValue(true);
  };

  return (
    <>
      <button className={style["btn_addItem"]} onClick={onAddItem}>
        +
      </button>
    </>
  );
};

export default BtnAddItem;
