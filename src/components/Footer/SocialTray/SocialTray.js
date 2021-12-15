import React from 'react'
import {
    FaFacebookSquare,
    FaLinkedin,
    FaYoutubeSquare,
    FaInstagramSquare
} from 'react-icons/fa'
import './SocialTray.css'

export const SocialTray = () => {
    return (
        <>
            <div id="social-tray">
                <a href="https://www.linkedin.com/company/udyam/">
                    <FaLinkedin className="icons" />
                </a>
                <a href="https://www.facebook.com/udyamfest">
                    <FaFacebookSquare className="icons" />
                </a>
                <a href="https://www.instagram.com/udyam_iit_bhu/">
                    <FaInstagramSquare className="icons" />
                </a>
                <a href="https://www.youtube.com/channel/UC8wlztNbDIu38rfQ1HChSIg">
                    <FaYoutubeSquare className="icons" />
                </a>
            </div>
        </>
    )
}
