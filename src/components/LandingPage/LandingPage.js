import React from 'react'
import './LandingPage.css'
import { /*BrowserRouter as Router,*/ Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div
            id="landing-page-main-container"
            className="landing-page-container"
        >
            {/* <div>
                <img
                    src="./images/udyamFont.png"
                    alt="udyam title"
                    className="udyam-title"
                />
            </div> */}
            <div className="page-links">
                <Link
                    to="/"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '320px' }}
                >
                    <div>Home</div>
                </Link>

                <Link
                    to="/about-us"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '340px' }}
                >
                    <div>About us</div>
                </Link>

                <Link
                    to="/events"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '360px' }}
                >
                    <div>Events</div>
                </Link>

                <Link
                    to="/speakers"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '380px' }}
                >
                    <div>Speakers</div>
                </Link>

                <Link
                    to="/leaderboard"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '400px' }}
                >
                    <div>Leaderboard</div>
                </Link>

                <Link
                    to="/sponsors"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '420px' }}
                >
                    <div>Sponsors</div>
                </Link>

                <Link
                    to="/team"
                    className="page-link px-4 py-2 my-4"
                    style={{ width: '440px' }}
                >
                    <div>Team</div>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
