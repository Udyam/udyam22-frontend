import React from 'react'
import styles from './Notif.module.css'
import { useHistory } from 'react-router-dom'

const Notif = ({ title, date, description }) => {
    const history = useHistory()

    const ClickHandler = () => {
        history.push({
            pathname: '/notice',
            state: {
                title: title,
                description: description,
            },
        })
    }

    return (
        <div className={styles.container} onClick={ClickHandler}>
            <span className={styles.text}>{title}</span>
            <span className={styles.date}>{date}</span>
        </div>
    )
}

export default Notif
