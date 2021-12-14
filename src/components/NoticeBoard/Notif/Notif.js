import React from 'react'
import styles from './Notif.module.css'

const Notif = ({ text, date }) => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>{text}</span>
            <span className={styles.date}>{date}</span>
        </div>
    )
}

export default Notif
