import React from 'react'
import './Team.css'
import axios from '../../utils/axios'

const Team = ({ key, eventName, teamName, members }) => {
    const id = key
    const auth = {
        headers: {
            Authorization: 'Token ',
        },
    }
    /* var Member1
    var Member2
    const Leader=members[0]
    if (members.length == 3) {
        Member1 = members[1]
        Member2 = members[2]
    }
    else if (members.length == 2) {
        Member1 = members[1]
        Member2 = ' '
    }*/
    let additionalMembers = []
    if (members.length > 1) {
        additionalMembers = members.slice(1, members.length)
    }
    const deleteTeam = (id) => {
        axios
            .delete(
                'https://udyam22-backend.herokuapp.com/API/team/' + id + '/',
                auth
            )
            .then(function ({ response }) {
                console.log(response)
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    return (
        <div className="teamContainer">
            <img
                className="eventImageTop"
                src={'./images/' + eventName + '.png'}
            />
            <div className="teamDetails">
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <h4>Event : {eventName}</h4>
                    </li>
                    <li>
                        <h4>Team Name: {teamName}</h4>
                    </li>
                    <li>
                        <h4>
                            Team Members : {members[0]}
                            {additionalMembers.map((member) => {
                                return ', ' + member
                            })}
                        </h4>
                    </li>
                    <h4 className="deleteBtn" onClick={() => deleteTeam(id)}>
                        DELETE TEAM
                    </h4>
                </ul>
            </div>
            <img
                className="eventImageRight"
                src={'./images/' + eventName + '.png'}
            />
        </div>
    )
}

export default Team
