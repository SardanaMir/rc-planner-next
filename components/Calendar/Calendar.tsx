import styles from './Calendar.module.scss'

export default function Calendar({WEEKDAYS, dateArr}){
    return(
        <main className={styles.root}>
            <div className={styles.days}>
            {WEEKDAYS.map((day: string) => (
                <h4 key={day}>{day}</h4>
            ))}
            </div>
            <table className={styles.table}>
                <tbody className={styles.calendar}>
                    {dateArr.map((date, index: number) => (
                    <tr className={styles.block} key={index}>
                        <th className={styles.date}>
                        {date.toFormat("d")}
                        </th>
                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}