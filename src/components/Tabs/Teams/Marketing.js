import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import facebook_icon from './Mem_Images/facebook_icon.png'
import insta_icon from './Mem_Images/insta_icon.png'
import linkedin_icon from './Mem_Images/linkedin_icon.png'
import Prajakta_Priyadarsini from './Mem_Images/Prajakta_Priyadarsini.jpg'
import Somesh_Dey from './Mem_Images/Somesh_Dey.jpg'
import Varsha_Jangir from './Mem_Images/Varsha_Jangir.jpg'

const Marketing_Team = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id="Teams_Scrollbar">
                <h1 className="title">MARKETING TEAM</h1>

                <div className="row">
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Prajakta_Priyadarsini}
                            alt="Hello World"
                        />

                        <div>PRAJAKTA PRIYADARSINI</div>
                        <div>HEAD</div>

                        <div className="social_icons">
                            <a href="https://about.linkedin.com/">
                                <img src={linkedin_icon} />
                            </a>

                            <a href="https://www.facebook.com/">
                                <img src={facebook_icon} />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img src={insta_icon} />
                            </a>
                        </div>
                    </div>

                    <div className="tile2">
                        <img
                            className="photo"
                            src={Somesh_Dey}
                            alt="Hello World"
                        />

                        <div>SOMESH DEY</div>
                        <div>COORDINATOR</div>

                        <div className="social_icons">
                            <a href="https://about.linkedin.com/">
                                <img src={linkedin_icon} />
                            </a>

                            <a href="https://www.facebook.com/">
                                <img src={facebook_icon} />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img src={insta_icon} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div
                        className="tile1"
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    >
                        <img
                            className="photo"
                            src={Varsha_Jangir}
                            alt="Hello World"
                        />

                        <div>VARSHA JANGIR</div>
                        <div>COORDINATOR</div>

                        <div className="social_icons">
                            <a href="https://about.linkedin.com/">
                                <img src={linkedin_icon} />
                            </a>

                            <a href="https://www.facebook.com/">
                                <img src={facebook_icon} />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img src={insta_icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Marketing_Team
