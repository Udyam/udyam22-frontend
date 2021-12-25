import React from 'react'
import Team from './Team.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
const Teams = () => {
   
    const [events,setEvents] = useState({
      
           
                id:'',
                event: '',
                teamname: '',
                leader: '',
                member1: '',
                member2: '',
         
      
    })
    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/API/teams/user/', {
                headers: {
                    Authorization:
                        'Token d102f9b8531448411f3658ecfdeeee5b0fbf2a17',
                },
            })
            .then((res) => {
                console.log(res.data)
                setEvents(res.data)
            })
    }, [])

    return (
        <div>
            {events.id == ''? (
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
