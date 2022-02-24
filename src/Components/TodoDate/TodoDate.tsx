import style from "./TodoDate.module.css";

const TodoDate = () => {
  const day = new Date().toLocaleDateString("en-us", { weekday: "long" });
  const date = new Date().getDate();
  const month = new Date().toLocaleString("en-us", { month: "short" });
  const year = new Date().toLocaleString("en-us", { year: "numeric" });

  return (
    <>
      <div className={style["hero_date"]}>
        <div className={style["hero_inner_date"]}>
          <div className={style.date}>{date}</div>
          <div className={style["div_month_year"]}>
            <p id={style.mon}>{month}</p>
            <p id={style.year}>{year}</p>
          </div>
        </div>
        <div className={style["div_day"]}>{day}</div>
      </div>
    </>
  );
};

export default TodoDate;
