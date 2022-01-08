import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import Sample_Image from './Mem_Images/Sample_Image.jpg'
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import Yash_Jain from './Mem_Images/Yash_Jain.jpg'
import Atharva_Bhatt from './Mem_Images/Atharva_Bhatt.jpg'
import Prashasti_Tripathi from './Mem_Images/Prashasti_Tripathi.jpg'
import Anshuman_Asauliya from './Mem_Images/Anshuman_Asauliya.jpg'
import Sanidhya_Taparia from './Mem_Images/Sanidhya_Taparia.jpeg'
import Sanskar_Santosh_Totla from './Mem_Images/Sanskar_Santosh_Totla.jpg'
import Sarang_Manerikar from './Mem_Images/Sarang_Manerikar.jpeg'
import Mayank_Singh from './Mem_Images/Mayank_Singh.jpeg'

const Developers = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id="Teams_Scrollbar">
                <h1 className="title">DEVELOPERS</h1>

                <div className="row">
                    <div className="tile1">
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

                    <div className="tile2">
                        <img
                            className="photo"
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>AYUSH GANGWANI</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Atharva_Bhatt}
                            alt="Hello World"
                        />

                        <div>ATHARVA BHATT</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Sarang_Manerikar}
                            alt="Hello World"
                        />

                        <div>SARANG MANERIKAR</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Prashasti_Tripathi}
                            alt="Hello World"
                        />

                        <div>PRASHASTI TRIPATHI</div>
                        <div>WEB COORDINATOR</div>

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

                        <div>ANKUR AGRAWAL</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>RAINA JAIN</div>
                        <div>WEB COORDINATOR</div>

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

                        <div>AYUSHI GUPTA</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Sanskar_Santosh_Totla}
                            alt="Hello World"
                        />

                        <div className="teams_oveflow_names">
                            SANSKAR SANTOSH TOTLA
                        </div>
                        <div className="teams_oveflow_names">
                            WEB COORDINATOR
                        </div>

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
                            src={Sanidhya_Taparia}
                            alt="Hello World"
                        />

                        <div>SANIDHYA TAPARIA</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Anshuman_Asauliya}
                            alt="Hello World"
                        />

                        <div className="teams_oveflow_names">
                            ANSHUMAN ASAULIYA
                        </div>
                        <div className="teams_oveflow_names">
                            WEB COORDINATOR
                        </div>

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
                            src={Mayank_Singh}
                            alt="Hello World"
                        />

                        <div>MAYANK SINGH</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>JAYESH UPADHYAY</div>
                        <div>WEB COORDINATOR</div>

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

                        <div>SUHANI AGRAWAL</div>
                        <div>WEB COORDINATOR</div>

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
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>RIYA KANOJIYA</div>
                        <div>WEB COORDINATOR</div>

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

                        <div>AYUSH BEMERA</div>
                        <div>WEB COORDINATOR</div>

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

export default Developers
