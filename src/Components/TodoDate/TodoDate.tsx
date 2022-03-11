import style from "./TodoDate.module.css";
import { useState, useEffect } from "react";

let getTime = new Date().toLocaleTimeString();

const TodoDate = () => {
  const [currTime, setCurrTime] = useState(getTime);

  useEffect(() => {
    const interval = setTimeout(() => {
      getTime = new Date().toLocaleTimeString();
      setCurrTime(getTime);
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [currTime]);

  const date = new Date().getDate();
  const day = new Date().toLocaleDateString("en-us", { weekday: "long" });
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
        <div className={style["div_time"]}>{currTime}</div>
        <div className={style["div_day"]}>{day}</div>
      </div>
    </>
  );
};

export default TodoDate;
