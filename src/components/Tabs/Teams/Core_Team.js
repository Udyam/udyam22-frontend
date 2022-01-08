import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import Sample_Image from './Mem_Images/Sample_Image.jpg'
//import Sample_Image2 from './Mem_Images/Sample_Image2.jpg'
import Ritweek_Singh from './Mem_Images/Ritweek_Singh.jpg'
import Akshat_Jain from './Mem_Images/Akshat_Jain.jpg'
import Pranav_Mittal from './Mem_Images/Pranav_Mittal.jpg'
import Vikhyath_Venkatraman from './Mem_Images/Vikhyath_Venkatraman.jpg'
import Eshaan_Gupta from './Mem_Images/Eshaan_Gupta.jpeg'
import Smriti_Sharma from './Mem_Images/Smriti_Sharma.jpg'
import Siddharth_Anand_Srivastav from './Mem_Images/Siddharth_Anand.jpg'
import Aditya_Agarwal from './Mem_Images/Aditya_Agarwal.jpg'
import Swastik_Thapa from './Mem_Images/Swastik_Thapa.jpg'
import Yash_Jain from './Mem_Images/Yash_Jain.jpg'
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const Core_Team = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id="Teams_Scrollbar">
                <h1 className="title">CORE TEAM</h1>

                <div className="row">
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Ritweek_Singh}
                            alt="Hello World"
                        />

                        <div>RITWEEK SINGH</div>
                        <div>CONVENOR</div>

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

                        <div>MOHIT SHRINGI</div>
                        <div>GENERAL SECRETARY</div>

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
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Akshat_Jain}
                            alt="Hello World"
                        />

                        <div>AKSHAT JAIN</div>
                        <div>CO-CONVENOR</div>

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
                            src={Pranav_Mittal}
                            alt="Hello World"
                        />

                        <div>PRANAV MITTAL</div>
                        <div>JOINT GENERAL SECRETARY</div>

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
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Vikhyath_Venkatraman}
                            alt="Hello World"
                        />

                        <div>VIKHYATH VENKATRAMAN</div>
                        <div>JOINT GENERAL SECRETARY</div>

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
                            src={Eshaan_Gupta}
                            alt="Hello World"
                        />

                        <div>ESHAAN GUPTA</div>
                        <div>TECHNICAL SECRETARY</div>

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
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Smriti_Sharma}
                            alt="Hello World"
                        />

                        <div>SMRITI SHARMA</div>
                        <div>TECHNICAL SECRETARY</div>

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
                            src={Siddharth_Anand_Srivastav}
                            alt="Hello World"
                        />

                        <div>SIDDHARTH ANAND SRIVASTAV</div>
                        <div>CULTURAL SECRETARY</div>

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
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Aditya_Agarwal}
                            alt="Hello World"
                        />

                        <div>ADITYA AGARWAL</div>
                        <div>CULTURAL SECRETARY</div>

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
                            src={Swastik_Thapa}
                            alt="Hello World"
                        />

                        <div>SWASTIK THAPA</div>
                        <div>SPORTS SECRETARY</div>

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
                            src={Yash_Jain}
                            alt="Hello World"
                        />

                        <div>YASH JAIN</div>
                        <div>WEB HEAD</div>

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

export default Core_Team
