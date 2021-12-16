import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        college_name: '',
        year: '',
        refferal_code: '',
    })

    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/auth/update/', {
                headers: {
                    Authorization:
                        'Token d102f9b8531448411f3658ecfdeeee5b0fbf2a17',
                },
            })
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            })
    }, [])

    return (
        <div className="profileContainer">
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <h4 style={{ fontWeight: '600', marginTop: '20px' }}>
                        Name : {user.name}
                    </h4>
                </li>
                <li>
                    <h4>Username : {user.name}</h4>
                </li>
                <li>
                    <h4>Email id: {user.email}</h4>
                </li>
                <li>
                    <h4>Contact : 9000000000</h4>
                </li>
            </ul>
            <div className="editLink">
                <Link to="#">
                    <h4>Edit</h4>
                </Link>
            </div>
            <div className="displayPictureContainer">
                <img className="displayPicture" src="./icon/dummy.png" />
                <Link to="#">
                    <img className="editIcon" src="./icon/edit.png" />
                </Link>
            </div>
        </div>
    )
}

export default Profile
