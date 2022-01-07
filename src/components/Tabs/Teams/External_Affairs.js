import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import Sample_Image from './Mem_Images/Sample_Image.jpg'
import Aman_Kumar from './Mem_Images/Aman_Kumar.jpg'
import Vikash_Prajapati from './Mem_Images/Vikash_Prajapati.jpg'
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const External_Affairs = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id="Teams_Scrollbar">
                <h1 className="title">EXTERNAL AFFAIRS</h1>

                <div className="row">
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Aman_Kumar}
                            alt="Hello World"
                        />

                        <div>AMAN KUMAR</div>
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
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>KUSHAGRA YADAV</div>
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
                            src={Vikash_Prajapati}
                            alt="Hello World"
                        />

                        <div>VIKASH PRAJAPATI</div>
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

export default External_Affairs
