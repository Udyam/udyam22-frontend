import React from 'react'
import './Team.css'
import axios from '../../utils/axios'


const Team = ({id, eventName, teamName, leader,member1,member2 }) => {
    
    const auth = {
        headers: {
            Authorization: 'Token d102f9b8531448411f3658ecfdeeee5b0fbf2a17',
        },
    }
    var members=[]
    if (member1==null&& member2==null) {
        members=[leader]
    }
    else if (member1!=null&& member2==null) {
       members=[leader,member1]
    }
    else if(member1!=null&& member2!=null) {
        members=[leader,member1,member2]
     }
    let additionalMembers = []
    if (members.length > 1) {
        additionalMembers = members.slice(1, members.length)
    }
    const deleteTeam = ({id}) => {
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
            <img className="eventImageTop" src={'./images/' + eventName + '.png'} />
            <div className="teamDetails">
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <h4>Event : {eventName}</h4>
                    </li>
                    <li>
                        <h4> Team Name: {teamName}</h4>
                       
                    </li>
                    <li>
                        <h4>
                            Team Members : {members[0]}
                            {additionalMembers.map((member) => {
                                return ', ' + member
                            })}
                        </h4>
                    </li>
                    <h4 className="deleteBtn" onClick={() => deleteTeam({id})}>
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
