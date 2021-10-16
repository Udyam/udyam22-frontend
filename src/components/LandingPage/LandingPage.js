import React from 'react'
import './LandingPage.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <Router>
            <div className="landing-page-container">
                <div>
                    <img
                        src="./images/udyamFont.png"
                        alt="udyam title"
                        className="udyam-title"
                    />
                </div>
                <div className="page-links">
                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "320px"}}>
                        <div>HOME</div>
                    </Link>

                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "340px"}}>
                        <div>ABOUT US</div>
                    </Link>

                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "360px"}}>
                        <div>EVENTS</div>
                    </Link>

                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "380px"}}>
                        <div>SPEAKERS</div>
                    </Link>

                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "400px"}}>
                        <div>LEADERBOARD</div>
                    </Link>

                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "420px"}}>
                        <div>SPONSORS</div>
                    </Link>

                    <Link to="/" className="page-link px-4 py-2 my-4" style={{width: "440px"}}>
                        <div>TEAM</div>
                    </Link>
                </div>
            </div>
        </Router>
    )
}

export default LandingPage
