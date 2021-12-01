import React from 'react'
import './Team.css'

const Team = ({ eventName, teamName, members }) => {
    let additionalMembers = []
    if (members.length > 1) {
        additionalMembers = members.slice(1, members.length)
    }
    return (
        <div className="teamContainer">
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
                    <h4 className="deleteBtn">DELETE TEAM</h4>
                </ul>
            </div>
            <img
                className="eventImage"
                src={'./images/' + eventName + '.png'}
            />
        </div>
    )
}

export default Team
