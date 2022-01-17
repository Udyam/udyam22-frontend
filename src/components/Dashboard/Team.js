import { React, useState, useEffect } from 'react'
import './Team.css'
import axios from '../../utils/axios'
import { useDashContext } from '../authentication/Context/dashcontext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
const Team = ({ id, eventName, teamName, leader, member1, member2 }) => {
    const token = localStorage.getItem('userToken')
    const arr = token.split('"')
    const token1 = arr[1]
    const auth = {
        headers: {
            Authorization: 'Token' + ' ' + token1,
        },
    }
    const [idf, setIdf] = useState(' ')
    const state = useDashContext()
    const { setState } = useDashContext()
    var members = []
    if (member1 == null && member2 == null) {
        members = [leader]
    } else if (member1 != null && member2 == null) {
        members = [leader, member1]
    } else if (member1 != null && member2 != null) {
        members = [leader, member1, member2]
    }
    let additionalMembers = []
    if (members.length > 1) {
        additionalMembers = members.slice(1, members.length)
    }
    useEffect(
        () => {
            if (state.state == 1 && idf != ' ') {
                axios
                    .delete(
                        'https://udyam22-backend.herokuapp.com/API/team/' +
                            idf +
                            '/',
                        auth
                    )
                    .then(function ({ response }) {
                        //console.log(response)
                        //console.log(state)
                        toast.success(
                            'Your team has been deleted successfully',
                            {
                                position: toast.POSITION.BOTTOM_RIGHT,
                            }
                        )
                        setState(8)
                    })
                    .catch(function (err) {
                        //console.log(err)
                    })
            }
        },
        [idf],
        [state]
    )
    const deleteTeam = ({ id }) => {
        setState(1)
        //console.log(id)
        //console.log(state.state)
        setIdf(id)
        if (state.state == 1) {
            axios
                .delete(
                    'https://udyam22-backend.herokuapp.com/API/team/' +
                        id +
                        '/',
                    auth
                )
                .then(function ({ response }) {
                    //console.log(response)
                    //console.log(state)
                    toast.success('Your team has been deleted successfully', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                    setState(8)
                })
                .catch(function (err) {
                    //console.log(err)
                })
        }
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
                    <h4
                        className="deleteBtn"
                        onClick={() => deleteTeam({ id })}
                    >
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
