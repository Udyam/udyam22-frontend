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
                            <NavLink className="tabLinks" href="#profile">
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#register">
                                Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#teams">
                                Teams
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#workshops">
                                Workshops
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="tabLinks" href="#submission">
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
                            <h2 id="profile">PROFILE</h2>
                            <Profile />
                        </li>
                        <li>
                            <h2 id="register">REGISTER NOW</h2>
                            <Register />
                        </li>
                        <li>
                            <h2 id="teams">TEAMS</h2>
                            <Teams />
                        </li>
                        <li>
                            <h2 id="workshops">WORKSHOPS</h2>
                            <Workshops />
                        </li>
                        <li>
                            <h2 id="submission">SUBMISSION</h2>
                            <Submission />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
