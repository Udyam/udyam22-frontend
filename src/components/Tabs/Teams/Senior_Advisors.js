import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import Sample_Image from './Mem_Images/Sample_Image.jpg'
import facebook_icon from './Mem_Images/facebook_icon.png'
import insta_icon from './Mem_Images/insta_icon.png'
import linkedin_icon from './Mem_Images/linkedin_icon.png'
import Samarth_Solanki from './Mem_Images/Samarth_Solanki.jpg'

const Senior_Advisors = () => {
    return (
        <Route>
            <Link className="back_button" to="/team">
                Back
            </Link>

            <div className="container_box" id="Teams_Scrollbar">
                <h1 className="title">SENIOR ADVISORS</h1>

                <div className="row">
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>EASWARAVAKA DINESH REDDY</div>
                        <div>TECHNICAL</div>

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
                            src={Samarth_Solanki}
                            alt="Hello World"
                        />

                        <div>SAMARTH SOLANKI</div>
                        <div>TECHNICAL</div>

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
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>ANKUR AGRAWAL</div>
                        <div>TECHNICAL</div>

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
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>AKSHAT GOYAL</div>
                        <div>WEBSITE DEVELOPMENT</div>

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
                    <div className="tile1">
                        <img
                            className="photo"
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>ALAVALA SUHAS</div>
                        <div>WEBSITE DEVELOPMENT</div>

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
                            src={Sample_Image}
                            alt="Hello World"
                        />

                        <div>ISHAAN AMRIT</div>
                        <div>CULTURAL</div>

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

export default Senior_Advisors
