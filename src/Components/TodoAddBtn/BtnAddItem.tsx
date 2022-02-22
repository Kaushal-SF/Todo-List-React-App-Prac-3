import style from "./BtnAddItem.module.css";

const BtnAddItem: React.FC<{ getBtnValue: (arg: boolean) => void }> = (props) => {
  const onAddItem = () => {
    // let bool = true;
    return props.getBtnValue(true);
  };

  return (
    <>
      {/* <div className={style["hero_add_btn"]}> */}
      <button className={style["btn_additem"]} onClick={onAddItem}>
        +
      </button>
      {/* </div> */}
    </>
  );
};

export default BtnAddItem;
