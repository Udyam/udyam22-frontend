import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'reactstrap'
import styles from './NoticeBoard.module.css'
import Notif from './Notif/Notif'
import SearchBox from './SearchBox/SearchBox'

const Noticeboard = () => {
    const [NOTIFS, setNOTIFS] = useState([])

    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/API/get_all_notice/')
            .then((response) => {
                setNOTIFS(response)
            })
            .catch((err) => console.log(err))
    }, [])

    const [filteredNotifs, setFilteredNotifs] = useState(NOTIFS)
    const filterNotifs = (query) => {
        setFilteredNotifs(
            NOTIFS.filter((notif) => {
                if (
                    query === '' ||
                    notif.description
                        .toLowerCase()
                        .includes(query.toLowerCase())
                )
                    return notif
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
                            text={notif.description}
                            date={notif.date}
                            key={notif.id}
                        ></Notif>
                    )
                })}
            </Card>
        </Card>
    )
}

export default Noticeboard
