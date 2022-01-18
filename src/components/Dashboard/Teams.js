import React from 'react'
import Team from './Team.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDashContext } from '../authentication/Context/dashcontext'
/*import { useDashContext } from '../authentication/Context/dashcontext';*/
const Teams = ({ dashboardToken }) => {
    const [events, setEvents] = useState({
        id: '',
        event: '',
        teamname: '',
        leader: '',
        member1: '',
        member2: '',
    })
    const state = useDashContext()
    const { setState } = useDashContext()
    //const {setState} = useDashContext()
    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/API/teams/user/', {
                headers: {
                    Authorization: `Token ${dashboardToken}`,
                },
            })
            .then((res) => {
                //console.log(res.data)
                setEvents(res.data)
            })
    }, [])
    useEffect(() => {
        if (state.state == 8) {
            axios
                .get('https://udyam22-backend.herokuapp.com/API/teams/user/', {
                    headers: {
                        Authorization: `Token ${dashboardToken}`,
                    },
                })
                .then((res) => {
                    //console.log(res.data)
                    setEvents(res.data)
                    setState(0)
                })
        }
    }, [state])

    return (
        <div>
            {events.id == '' ? (
                <h5 style={{ paddingTop: '10px' }}>No teams yet.</h5>
            ) : (
                events.map((event) => {
                    return (
                        <Team
                            key={event.id}
                            id={event.id}
                            eventName={event.event}
                            teamName={event.teamname}
                            leader={event.leader}
                            member1={event.member1}
                            member2={event.member2}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Teams
