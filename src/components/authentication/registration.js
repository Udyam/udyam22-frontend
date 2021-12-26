import React from 'react'
import { useHistory } from 'react-router-dom'
import './registration.css'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { useAuthContext } from './Context/AuthContext'

export default function ComingSoon() {
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
        <div className="comingsoonwholepage">
            <div className="comingsoon-logocircle12">
                <img
                    src="../images/photo_2021-11-27_18-13-10.png"
                    className="comingsoon-Udyamlogo12"
                    alt="Udyam"
                />
            </div>
            <div className="comingsoon-form-container">
                <div className="tabs coming">
                    <Nav className="justify-content-center">
                        <div className="navigation">
                            <NavItem>
                                <NavLink className="tabLinks" href="#">
                                    Logout
                                </NavLink>
                            </NavItem>
                        </div>
                        <div className="navigationMobile">
                            <NavItem>
                                <NavLink onClick={logoutfn}>logout</NavLink>
                            </NavItem>
                        </div>
                    </Nav>
                </div>

                <div className="comingsoon-noti">
                    <h1 className="comingsoon-form-head">
                        Event Registration will open soon!!
                    </h1>
                </div>
            </div>
        </div>
    )
}
