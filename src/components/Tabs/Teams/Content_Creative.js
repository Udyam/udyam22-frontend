import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import Nisitha_Vallamdasu from './Mem_Images/Nisitha_Vallamdasu.jpg'
import Prajakta_Priyadarsini from './Mem_Images/Prajakta_Priyadarsini.jpg'
import Khushabu_Kumari from './Mem_Images/Khushabu_Kumari.jpg'
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const Content_and_Creative = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id="Teams_Scrollbar">
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

                        <div id="Teams_social-tray">
                            <a href="https://www.linkedin.com/company/udyam/">
                                <FaLinkedin className="social_icons" />
                            </a>
                            <a href="https://www.facebook.com/udyamfest">
                                <FaFacebookSquare className="social_icons" />
                            </a>
                            <a href="https://www.instagram.com/udyam_iit_bhu/">
                                <FaInstagramSquare className="social_icons" />
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

                        <div id="Teams_social-tray">
                            <a href="https://www.linkedin.com/company/udyam/">
                                <FaLinkedin className="social_icons" />
                            </a>
                            <a href="https://www.facebook.com/udyamfest">
                                <FaFacebookSquare className="social_icons" />
                            </a>
                            <a href="https://www.instagram.com/udyam_iit_bhu/">
                                <FaInstagramSquare className="social_icons" />
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

                        <div id="Teams_social-tray">
                            <a href="https://www.linkedin.com/company/udyam/">
                                <FaLinkedin className="social_icons" />
                            </a>
                            <a href="https://www.facebook.com/udyamfest">
                                <FaFacebookSquare className="social_icons" />
                            </a>
                            <a href="https://www.instagram.com/udyam_iit_bhu/">
                                <FaInstagramSquare className="social_icons" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Content_and_Creative
