import React, { useState } from 'react'
import { Card } from 'reactstrap'
import styles from './NoticeBoard.module.css'
import NOTIFS from './dummyNotifs.json'
import Notif from './Notif/Notif'
import SearchBox from './SearchBox/SearchBox'

const Noticeboard = () => {
    const [filteredNotifs, setFilteredNotifs] = useState(NOTIFS)
    const filterNotifs = (query) => {
        setFilteredNotifs(
            NOTIFS.filter((notif) => {
                if (
                    query === '' ||
                    notif.notif.toLowerCase().includes(query.toLowerCase())
                )
                    return notif
            })
        )
    }

    return (
        <Card body className={styles.outer_container}>
            <SearchBox filterNotifs={filterNotifs}> </SearchBox>
            <Card body className={styles.scroll_container}>
                {filteredNotifs.map((notif, ind) => {
                    return (
                        <Notif
                            text={notif.notif}
                            date={notif.date}
                            key={ind}
                        ></Notif>
                    )
                })}
            </Card>
        </Card>
    )
}

export default Noticeboard
