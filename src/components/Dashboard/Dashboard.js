import React from 'react'
import './Dashboard.css'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Profile from './Profile.js'
import Register from './Register.js'
import Teams from './Teams.js'
import Workshops from './Workshops.js'
import Submission from './Submission.js'
import { Link, useHistory } from 'react-router-dom'
import { useAuthContext } from '../authentication/Context/AuthContext'

const Dashboard = () => {
    const history = useHistory()

    if (
        !localStorage.getItem('userToken') ||
        localStorage.getItem('userToken') == 'undefined'
    ) {
        history.push('/loginregister')
        return null
    } else {
        const { logout } = useAuthContext()
        const logoutfn = () => {
            logout()
            history.push('/')
        }
        const token = localStorage.getItem('userToken')
        const arr = token.split('"')
        const token1 = arr[1]
        console.log('token=', token1)
        return (
            <div>
                <div className="dashboardContainer">
                    <div className="displayPictureDash">
                        <img
                            className="displayPicture"
                            src="./icon/dummy.png"
                        />
                        <Link to="#">
                            <img
                                className="editIconDash"
                                src="./icon/edit.png"
                            />
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
                                    <NavLink
                                        className="tabLinks"
                                        href="#profile"
                                    >
                                        Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="tabLinks"
                                        href="#register"
                                    >
                                        Register
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="tabLinks" href="#teams">
                                        Teams
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="tabLinks"
                                        href="#workshops"
                                    >
                                        Workshops
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="tabLinks"
                                        href="#submission"
                                    >
                                        Submission
                                    </NavLink>
                                </NavItem>
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
                                <h2 id="profile">PROFILE</h2>
                                <Profile dashboardToken={token1} />
                            </li>
                            <li>
                                <h2 id="register">REGISTER NOW</h2>
                                <Register dashboardToken={token1} />
                            </li>
                            <li>
                                <h2 id="teams">TEAMS</h2>
                                <Teams dashboardToken={token1} />
                            </li>
                            <li>
                                <h2 id="workshops">WORKSHOPS</h2>
                                <Workshops dashboardToken={token1} />
                            </li>
                            <li>
                                <h2 id="submission">SUBMISSION</h2>
                                <Submission dashboardToken={token1} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
