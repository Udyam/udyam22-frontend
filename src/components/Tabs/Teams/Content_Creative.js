import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import facebook_icon from './Mem_Images/facebook_icon.png'
import insta_icon from './Mem_Images/insta_icon.png'
import linkedin_icon from './Mem_Images/linkedin_icon.png'
import Nisitha_Vallamdasu from './Mem_Images/Nisitha_Vallamdasu.jpg'
import Prajakta_Priyadarsini from './Mem_Images/Prajakta_Priyadarsini.jpg'
import Khushabu_Kumari from './Mem_Images/Khushabu_Kumari.jpg'

const Content_and_Creative = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box">
                <h1 className="title">CONTENT AND CREATIVE</h1>

                <div className="row">
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Nisitha_Vallamdasu}
                            alt="Hello World"
                        />

                        <div>NISITHA VALLAMDASU</div>
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
                            src={Prajakta_Priyadarsini}
                            alt="Hello World"
                        />

                        <div>PRAJAKTA PRIYADARSINI</div>
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
                            src={Khushabu_Kumari}
                            alt="Hello World"
                        />

                        <div>KHUSHABU KUMARI</div>
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

export default Content_and_Creative
