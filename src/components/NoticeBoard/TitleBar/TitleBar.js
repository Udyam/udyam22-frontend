import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './TitleBar.module.css'

const TitleBar = (props) => {
    const history = useHistory()
    const clickHandler = () => {
        history.push('/noticeboard')
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrow_container}>
                <img
                    src="./images/backArrow.png"
                    onClick={clickHandler}
                    className={styles.arrow}
                ></img>
            </div>
            <span className={styles.title}>{props.title}</span>
        </div>
    )
}

export default TitleBar
