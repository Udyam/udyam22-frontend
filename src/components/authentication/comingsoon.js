import React from 'react'
import './comingsoon.css'
import { Nav, NavItem, NavLink } from 'reactstrap'
import ComingSoon from './registration.js'
import { useHistory } from 'react-router-dom'
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
                <div className="displayPictureDashcoming">
                    <img
                        className="displayPicture"
                        src="../images/photo_2021-11-27_18-13-10.png"
                    />
                </div>
                <div className="tabs">
                    <Nav className="justify-content-center">
                        <div className="navigation">
                            <NavItem>
                                <NavLink
                                    className="tabLinks"
                                    href="#"
                                    onClick={logoutfn}
                                >
                                    Logout
                                </NavLink>
                            </NavItem>
                        </div>
                        <div className="navigationMobile">
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
                                <br></br>
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
