import React from 'react'
import { Toast, ToastBody } from 'reactstrap'
import {Link } from 'react-router-dom'
import './ToggleMenu.css'


const ToggleMenu = ({ toggle }) => {
    return (
            <div style={{ position: 'fixed', top: '0', zIndex: 2 }}>
                <Toast
                    isOpen={true}
                    style={{
                        height: '100vh',
                        width: '100vw',
                        backgroundColor: 'rgba(2, 32, 73, 0.85)',
                    }}
                >
                    <img
                        src="./icon/cross.png"
                        alt="close button"
                        className="close-btn mx-4 my-4"
                        onClick={toggle}
                    />
                    <ToastBody>
                        <div className="link-div">
                            <Link to="/" className="toggle-menu-link" onClick={toggle}>
                                HOME
                            </Link>
                            <br />
                            <br />
                            <Link to="/about-us" className="toggle-menu-link" onClick={toggle}>
                                ABOUT US
                            </Link>
                            <br />
                            <br />
                            <Link to="/events" className="toggle-menu-link" onClick={toggle}>
                                EVENTS
                            </Link>
                            <br />
                            <br />
                            <Link to="/speakers" className="toggle-menu-link" onClick={toggle}>
                                SPEAKERS
                            </Link>
                            <br />
                            <br />
                            <Link to="/leaderboard" className="toggle-menu-link" onClick={toggle}>
                                LEADERBOARD
                            </Link>
                            <br />
                            <br />
                            <Link to="/sponsors" className="toggle-menu-link" onClick={toggle}>
                                SPONSORS
                            </Link>
                            <br />
                            <br />
                            <Link to="/team" className="toggle-menu-link" onClick={toggle}>
                                TEAM
                            </Link>
                            <br />
                            <br />
                        </div>
                    </ToastBody>
                </Toast>
            </div>
    )
}

export default ToggleMenu
