import React from 'react'
import {
    FaFacebookSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutubeSquare,
} from 'react-icons/fa'
import './SocialTray.css'

export const SocialTray = () => {
    return (
        <>
            <div id="container">
                <a href="#">
                    <FaLinkedin className="icons" />
                </a>
                <a href="#">
                    <FaFacebookSquare className="icons" />
                </a>
                <a href="#">
                    <FaTwitterSquare className="icons" />
                </a>
                <a href="#">
                    <FaYoutubeSquare className="icons" />
                </a>
            </div>
        </>
    )
}
