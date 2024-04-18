"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DateTime } from "luxon";
import Image from "next/image";
import { Calendar } from "../components";
import { openModal } from "../redux/slices/modalSlice";
import { logo, leftArrow, rightArrow } from "../public/images";
import styles from "../styles/Home.module.scss";

export default function Home() {
    const dispatch = useDispatch()
    const WEEKDAYS: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const totalDays: number = 42;
    const today = DateTime.now();
    const [currentDay, setCurrentDay] = useState<any>(DateTime.now());
    
    const startDay = currentDay.startOf("month").startOf("week");
    let day = startDay;
    const dateArr = Array.from({ length: totalDays }, () => {
      const currentDay = day;
      day = day.plus({ days: 1 });
      return currentDay;
    });
  
    const currentMonth = currentDay.setLocale("ru").monthLong;
    const monthName = currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
  
    const isCurrentDay = dateArr.map(date => date.hasSame(today, "day") && date.hasSame(today, "month") && date.hasSame(today, "year") ? styles.current : "" )
  
    const prevMonthHandler = () => {
      setCurrentDay((prev) => prev.minus({ month: 1 }));
    };
    const nextMonthHandler = () => {
      setCurrentDay((prev) => prev.plus({ month: 1 }));
    };
    const handleLogin = () =>{
        dispatch(
            openModal({
              modalType: "auth",
              modalProps: {
                title: 'auth modal window'
              }
            })
        );
    }
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="logo"/>
        <div className={styles.wrapper}>
            <div className={styles.monthName}>
                <h3>{monthName}</h3>
            </div>
            <div className={styles.panel}>
                <button className={styles.leftArrow} onClick={() => prevMonthHandler()}><Image src={leftArrow} alt="prev"/></button>
                <button className={styles.rightArrow} onClick={() => nextMonthHandler()}><Image src={rightArrow} alt="next"/></button>
            </div>
        </div>
        <button className={styles.loginBtn} onClick={() => handleLogin()}>Войти</button>
      </header>
        <Calendar WEEKDAYS={WEEKDAYS} dateArr={dateArr}/>
    </>
  );
}
