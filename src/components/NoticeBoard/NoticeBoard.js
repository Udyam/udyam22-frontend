import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'reactstrap'
import styles from './NoticeBoard.module.css'
import Notif from './Notif/Notif'
import SearchBox from './SearchBox/SearchBox'
import TitleBar from './TitleBar/TitleBar'
import { useLocation } from 'react-router-dom'

const Noticeboard = () => {
    const [NOTIFS, setNOTIFS] = useState([])

    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/API/get_all_notice/')
            .then((response) => {
                setNOTIFS(response.data)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        setFilteredNotifs(NOTIFS)
    }, [NOTIFS])
    const [filteredNotifs, setFilteredNotifs] = useState(NOTIFS)
    const filterNotifs = (query) => {
        setFilteredNotifs(
            NOTIFS.filter((notif) => {
                return (
                    query === '' ||
                    notif.title.toLowerCase().includes(query.toLowerCase())
                )
            })
        )
    }

    return (
        <Card body className={styles.outer_container}>
            <SearchBox filterNotifs={filterNotifs}> </SearchBox>
            <Card body className={styles.scroll_container}>
                {filteredNotifs.map((notif) => {
                    return (
                        <Notif
                            title={notif.title}
                            date={notif.date}
                            description={notif.description}
                            key={notif.id}
                        ></Notif>
                    )
                })}
            </Card>
        </Card>
    )
}

const Notice = () => {
    const location = useLocation()

    return (
        <Card body className={styles.outer_container}>
            <TitleBar title={location.state.title} />
            <Card
                body
                className={`${styles.scroll_container} ${styles.description_container}`}
            >
                <p className={styles.description}>
                    {location.state.description}
                </p>
            </Card>
        </Card>
    )
}

export { Noticeboard, Notice }
