import React from 'react'
import Team from './Team.js'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Teams = ({ dashboardToken }) => {
    const [events, setEvents] = useState({
        eventsList: [
            {
                event: 'Digisim',
                teamname: 'InFerno',
                members: [
                    'Riya Saini',
                    'Tanuja Vasamsetty',
                    'Swetha Vislavath',
                ],
            },
        ],
    })
    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/API/team/', {
                headers: {
                    Authorization: `Token ${dashboardToken}`,
                },
            })
            .then((res) => {
                console.log(res.data)
                setEvents(res.data)
            })
    }, [])

    return (
        <div>
            {events.eventsList.length === 0 ? (
                <h5 style={{ paddingTop: '10px' }}>No teams yet.</h5>
            ) : (
                events.eventsList.map((event) => {
                    return (
                        <Team
                            key={event.event}
                            event={event.event}
                            teamname={event.teamname}
                            members={event.members}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Teams
