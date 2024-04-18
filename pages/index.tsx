"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DateTime } from "luxon";
import { Calendar, Header } from "../components";
import { openModal } from "../redux/slices/modalSlice";

export default function Home() {
    const dispatch = useDispatch()
    const WEEKDAYS: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const totalDays: number = 42;
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
    
    const prevMonthHandler = (): void => {
      setCurrentDay((prev: any) => prev.minus({ month: 1 }));
    };
    const nextMonthHandler = (): void => {
      setCurrentDay((prev: any) => prev.plus({ month: 1 }));
    };
    const handleLogin = (): void =>{
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
        <Header prevMonthHandler={prevMonthHandler} nextMonthHandler={nextMonthHandler} handleLogin={handleLogin} monthName={monthName}/>
        <Calendar WEEKDAYS={WEEKDAYS} dateArr={dateArr}/>
    </>
  );
}
