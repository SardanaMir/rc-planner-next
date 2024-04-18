"use client";
import Image from "next/image";
import { logo } from "../public/images";
import styles from "../styles/Home.module.scss";

export default function Home() {
    const WEEKDAYS: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const totalDays: number = 42;
    const dateArr = Array.from({length: totalDays}, (_, index) => index);
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="logo"/>
        <div className={styles.wrapper}>
          <h3>Апрель</h3>
          <div className={styles.panel}>
            <button
              className={styles.leftArrow}></button>
            <button
              className={styles.rightArrow}></button>
          </div>
        </div>
        <button className={styles.loginBtn}>Войти</button>
      </header>
      <main className={styles.root}>
        <div className={styles.days}>
          {WEEKDAYS.map((day) => (
            <h4 key={day}>{day}</h4>
          ))}
        </div>
        <table className={styles.table}>
          <tbody className={styles.calendar}>
            {dateArr.map((date, index) => (
              <tr className={styles.block} key={index}>
                <th className={styles.date}>
                  {date}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
