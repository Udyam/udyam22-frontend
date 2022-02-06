import React from 'react'
import {
    FaFacebookSquare,
    FaLinkedin,
    FaYoutubeSquare,
    FaInstagramSquare,
    FaDiscord,
} from 'react-icons/fa'
import './SocialTray.css'

export const SocialTray = () => {
    return (
        <>
            <div id="social-tray">
                <a
                    href="https://www.linkedin.com/company/udyam/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="icons" />
                </a>
                <a
                    href="https://discord.gg/gNrEW8vp4G"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDiscord className="icons" />
                </a>
                <a
                    href="https://www.facebook.com/udyamfest"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookSquare className="icons" />
                </a>
                <a
                    href="https://www.instagram.com/udyam_iit_bhu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagramSquare className="icons" />
                </a>
                <a
                    href="https://www.youtube.com/channel/UC8wlztNbDIu38rfQ1HChSIg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutubeSquare className="icons" />
                </a>
            </div>
        </>
    )
}
