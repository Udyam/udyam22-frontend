import React from 'react'
import './comingsoon.css'
import { Nav, NavItem, NavLink } from 'reactstrap'
import ComingSoon from './registration.js'
import { Link, useHistory } from 'react-router-dom'
import { useAuthContext } from '../authentication/Context/AuthContext'

const logoutcoming = () => {
    const history = useHistory()
    if (
        !localStorage.getItem('userToken') ||
        localStorage.getItem('userToken') == 'undefined'
    )
        history.push('/loginregister')
    const { logout } = useAuthContext()
    const logoutfn = () => {
        logout()
        history.push('/')
    }
    return (
        <div>
            <div className="dashboardContainer">
                <div className="displayPictureDash">
                    <img className="displayPicture" src="./icon/dummy.png" />
                    <Link to="#">
                        <img className="editIconDash" src="./icon/edit.png" />
                    </Link>
                </div>
                <div className="imageContainer">
                    <img
                        src="./images/udyamLogo.png"
                        className="displayImage"
                    />
                </div>
                <div className="tabs">
                    <Nav className="justify-content-center">
                        <div className="navigation">
                            <NavItem>
                                <NavLink className="tabLinks" href="#profile">
                                    ComingSoon
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="tabLinks" href="#">
                                    Logout
                                </NavLink>
                            </NavItem>
                        </div>
                        <div className="navigationMobile">
                            <img
                                className="navLogo"
                                src="./images/udyamLogo.png"
                            />
                            <NavItem>
                                <NavLink
                                    className="tabLinks"
                                    href="#"
                                    onClick={logoutfn}
                                >
                                    <img
                                        src="./icon/log-out.png"
                                        className="logoutIcon"
                                    />
                                    logout
                                </NavLink>
                            </NavItem>
                        </div>
                    </Nav>
                </div>
                <div className="scrollContainer px-4">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <h2 id="profile">
                                The event registration will be starting soon
                            </h2>
                            <ComingSoon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default logoutcoming
