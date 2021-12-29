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
        referral_code: '',
    })

    const [updateName, setupdateName] = useState(user.name)
    const [updateCollegeName, setupdateCollegeName] = useState(
        user.college_name
    )

    const editProfile = () => {
        setupdateName('')
        document.getElementById('profile-user-name').classList.add('hideme')
        document.getElementById('profile-college-name').classList.add('hideme')
        document.getElementById('profile-edit-button').classList.add('hideme')
        document.getElementById('edit-name-field').classList.remove('hideme')
        document
            .getElementById('edit-college-name-field')
            .classList.remove('hideme')
    }

    const updateProfileName = () => {
        // if (!updateDesc) {
        //     displayErrorToast('The update task field is empty!')
        //     return
        // }
        // axios
        //     .patch('todo/' + id + '/', { title: updateDesc }, auth)
        //     .then(function (response) {
        //         displaySuccessToast('Task has been updated.')
        //     })
        //     .catch(function (err) {
        //         displayErrorToast('Some error has occured.')
        //     })

        document.getElementById('profile-user-name').classList.remove('hideme')
        document
            .getElementById('profile-edit-button')
            .classList.remove('hideme')
        document.getElementById('edit-name-field').classList.add('hideme')
    }

    const updateProfileCollegeName = () => {
        // if (!updateDesc) {
        //     displayErrorToast('The update task field is empty!')
        //     return
        // }
        // axios
        //     .patch('todo/' + id + '/', { title: updateDesc }, auth)
        //     .then(function (response) {
        //         displaySuccessToast('Task has been updated.')
        //     })
        //     .catch(function (err) {
        //         displayErrorToast('Some error has occured.')
        //     })

        document
            .getElementById('profile-college-name')
            .classList.remove('hideme')
        document
            .getElementById('edit-college-name-field')
            .classList.add('hideme')
    }

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
                    <h4
                        id="profile-user-name"
                        style={{ fontWeight: '600', marginTop: '20px' }}
                    >
                        Name : {user.name}
                    </h4>
                    <div
                        id="edit-name-field"
                        style={{ marginTop: '10px' }}
                        className="hideme"
                    >
                        <input
                            id="input-edit-name"
                            type="text"
                            value={updateName}
                            onChange={(e) => {
                                setupdateName(e.target.value)
                            }}
                            className="editFieldForm"
                            placeholder="Edit Name"
                        />
                        <div id="done-button-name" className="doneButton">
                            <button
                                className="btn btn-success btn-outline-dark btn-circle"
                                onClick={() => {
                                    updateProfileName()
                                }}
                            >
                                <img src="./icon/check-circle.svg" />
                            </button>
                        </div>
                    </div>
                </li>
                {/* <li>
                    <h4>Username : {user.name}</h4>
                </li> */}
                <li>
                    <h4 id="profile-college-name">
                        College Name: {user.college_name}
                    </h4>
                    <div
                        id="edit-college-name-field"
                        style={{ marginTop: '-10px' }}
                        className="hideme"
                    >
                        <input
                            id="input-edit-college-name"
                            type="text"
                            value={updateCollegeName}
                            onChange={(e) => {
                                setupdateCollegeName(e.target.value)
                            }}
                            className="editFieldForm"
                            placeholder="Edit College Name"
                        />
                        <div
                            id="done-button-college-name"
                            className="doneButton"
                        >
                            <button
                                className="btn btn-success btn-outline-dark btn-circle"
                                onClick={() => {
                                    updateProfileCollegeName()
                                }}
                            >
                                <img src="./icon/check-circle.svg" />
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <h4>Email id: {user.email}</h4>
                </li>
                <li>
                    <h4>Year: {user.year}</h4>
                </li>
                <li>
                    <h4>Referral Code: {user.referral_code}</h4>
                </li>
                {/* <li>
                    <h4>Contact : {user.contact}</h4>
                </li> */}
            </ul>
            <div id="profile-edit-button">
                <h4 className="editLink" onClick={() => editProfile()}>
                    Edit
                </h4>
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
