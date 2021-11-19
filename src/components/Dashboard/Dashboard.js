import React from 'react'
import './Dashboard.css'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Profile from './Profile.js'
import Register from './Register.js'
import Teams from './Teams.js'
import Workshops from './Workshops.js'
import Submission from './Submission.js'

const Dashboard = () => {
    return (
        <div>
            <div className="dashboardContainer">
                <div className="imageContainer">
                    <img
                        src="./images/udyamLogo.png"
                        className="displayImage"
                    />
                </div>
                <div className="tabs">
                    <Nav className="justify-content-center">
                        <NavItem>
                            <NavLink className="tabLinks" href="#">
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#">
                                Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#">
                                Teams
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#">
                                Workshops
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#">
                                Submission
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#">
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div className="scrollContainer px-4">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <h2>PROFILE</h2>
                            <Profile />
                        </li>
                        <li>
                            <h2>REGISTER NOW</h2>
                            <Register />
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                            <h2>TEAMS</h2>
                            <Teams />
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                            <h2>WORKSHOPS</h2>
                            <Workshops />
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                            <h2>SUBMISSION</h2>
                            <Submission />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
