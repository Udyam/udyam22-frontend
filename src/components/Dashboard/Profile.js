import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Profile = ({ dashboardToken }) => {
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
                    Authorization: `Token ${dashboardToken}`,
                },
            })
            .then((res) => {
                console.log('res=', res.data)
                setUser(res.data)
                localStorage.setItem('year', res.data.year)
            })
            .catch((err) => {
                console.log('err=', err)
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
