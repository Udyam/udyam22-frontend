import React from 'react'
import './Team.css'
import axios from '../../utils/axios'

const Team = ({key, eventName, teamName, members }) => {
    const id=key
    const auth ={
        headers: {
            Authorization: "Token "
        },
      };
    let additionalMembers = []
    if (members.length > 1) {
        additionalMembers = members.slice(1, members.length)
    }
    const deleteTeam = (id) => {
        axios
        .delete('https://udyam22-backend.herokuapp.com/API/team/'+id+'/', auth)
        .then(function ({ response }) {
            console.log(response)
           
        })
        .catch(function (err) {
           console.log(err)
        });
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
                    <button className="deleteBtn"
                     onClick={() => deleteTeam(id)}>DELETE TEAM</button>
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
