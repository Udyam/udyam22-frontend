import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import facebook_icon from './Mem_Images/facebook_icon.png'
import insta_icon from './Mem_Images/insta_icon.png'
import linkedin_icon from './Mem_Images/linkedin_icon.png'
import Prince_Kumar_Gond from './Mem_Images/Prince_Kumar_Gond.jpg'
import Anshika_Khare from './Mem_Images/Anshika_Khare.jpg'
import Jayant_Roy from './Mem_Images/Jayant_Roy.jpg'

const Public_Relations = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id = "Teams_Scrollbar">
                <h1 className="title">PUBLIC RELATIONS</h1>

                <div className="row">
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Prince_Kumar_Gond}
                            alt="Hello World"
                        />

                        <div>PRINCE KUMAR GOND</div>
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
                            src={Anshika_Khare}
                            alt="Hello World"
                        />

                        <div>ANSHIKA KHARE</div>
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
                            src={Jayant_Roy}
                            alt="Hello World"
                        />

                        <div>JAYANT ROY</div>
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

export default Public_Relations
