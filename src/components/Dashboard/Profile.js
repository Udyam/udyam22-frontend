import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div className="profileContainer">
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <h4 style={{ fontWeight: '600', marginTop: '20px' }}>
                        Name
                    </h4>
                </li>
                <li>
                    <h4>Username : Tanuja</h4>
                </li>
                <li>
                    <h4>Email id: tanu@gmail.com</h4>
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
