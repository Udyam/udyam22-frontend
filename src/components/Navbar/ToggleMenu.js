import React from 'react'
import { Toast, ToastBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './ToggleMenu.css'

const ToggleMenu = ({ toggle }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                zIndex: 2,
                backgroundColor: 'rgba(2, 32, 73, 0.85)',
            }}
            >
            <Toast
                isOpen={true}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: 'transparent',
                    border: 'none'
                }}
            >
                <img
                    src="./icon/cross.png"
                    alt="close button"
                    className="close-btn mx-4 my-4"
                    onClick={toggle}
                />
                <ToastBody>
                    <ul className="link-div">
                        <li>
                            <Link
                                to="/"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/events"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                EVENTS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/speakers"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                SPEAKERS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/leaderboard"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                LEADERBOARD
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sponsors"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                SPONSORS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/team"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                TEAM
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/noticeboard"
                                className="toggle-menu-link"
                                onClick={toggle}
                            >
                                NOTICEBOARD
                            </Link>
                        </li>
                    </ul>
                </ToastBody>
            </Toast>
        </div>
    )
}

export default ToggleMenu
