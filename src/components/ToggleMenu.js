import React from 'react'
import { Toast, ToastBody } from 'reactstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './ToggleMenu.css'

const ToggleMenu = ({ toggle }) => {
    return (
        <Router>
            <div style={{ position: 'absolute', top: '0' }}>
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
                            <Link to="/" className="toggle-menu-link">
                                HOME
                            </Link>
                            <br />
                            <br />
                            <Link to="/" className="toggle-menu-link">
                                ABOUT US
                            </Link>
                            <br />
                            <br />
                            <Link to="/" className="toggle-menu-link">
                                EVENTS
                            </Link>
                            <br />
                            <br />
                            <Link to="/" className="toggle-menu-link">
                                SPEAKERS
                            </Link>
                            <br />
                            <br />
                            <Link to="/" className="toggle-menu-link">
                                LEADERBOARD
                            </Link>
                            <br />
                            <br />
                            <Link to="/" className="toggle-menu-link">
                                SPONSORS
                            </Link>
                            <br />
                            <br />
                            <Link to="/" className="toggle-menu-link">
                                TEAM
                            </Link>
                            <br />
                            <br />
                        </div>
                    </ToastBody>
                </Toast>
            </div>
        </Router>
    )
}

export default ToggleMenu
