
import React from 'react';
import Image from "next/image";
import { logo, leftArrow, rightArrow } from "../../public/images";
import styles from './Header.module.scss'

type HeaderProps = {
    prevMonthHandler: () => void;
    nextMonthHandler: () => void;
    handleLogin: () => void;
    monthName: string
}

const Header: React.FC<HeaderProps> = ({prevMonthHandler, nextMonthHandler, monthName, handleLogin}) => {
    return(
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
    )
}
export default Header