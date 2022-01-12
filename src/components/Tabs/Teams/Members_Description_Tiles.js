import React from 'react'
import './Sub_Files.css'

import Nisitha_Vallamdasu from './Mem_Images/Nisitha_Vallamdasu.jpg'
import Prajakta_Priyadarsini from './Mem_Images/Prajakta_Priyadarsini.jpg'
import Khushabu_Kumari from './Mem_Images/Khushabu_Kumari.jpg'
import LinkedIn from './Icons/LinkedIn.png'
import Facebook from './Icons/Facebook.png'
import Instagram from './Icons/Instagram.png'

const nisitha_vallamdasu = () => {
    return (
        <div className="Members_Tiles">
            <img
                className="photo"
                src={Nisitha_Vallamdasu}
                alt="Nisitha Vallamdasu"
            />
            <div className="Members_Description">NISITHA VALLAMDASU</div>
            <div className="Members_Description">HEAD</div>
            <div className="Teams_social-tray">
                <a href="https://www.linkedin.com/company/udyam/">
                    <img src={LinkedIn} className="social_icons" />
                </a>
                <a href="https://www.facebook.com/udyamfest">
                    <img src={Facebook} className="social_icons" />
                </a>
                <a href="https://www.instagram.com/udyam_iit_bhu/">
                    <img src={Instagram} className="social_icons" />
                </a>
            </div>
        </div>
    )
}

const prajakta_priyadarsini = () => {
    return (
        <div className="Members_Tiles">
            <img
                className="photo"
                src={Prajakta_Priyadarsini}
                alt="Prajakta Priyadarsini"
            />
            <div className="Members_Description">PRAJAKTA PRIYADARSINI</div>
            <div className="Members_Description">COORDINATOR</div>
            <div className="Teams_social-tray">
                <a href="https://www.linkedin.com/company/udyam/">
                    <img src={LinkedIn} className="social_icons" />
                </a>
                <a href="https://www.facebook.com/udyamfest">
                    <img src={Facebook} className="social_icons" />
                </a>
                <a href="https://www.instagram.com/udyam_iit_bhu/">
                    <img src={Instagram} className="social_icons" />
                </a>
            </div>
        </div>
    )
}

const khushabu_kumari = () => {
    return (
        <div className="Members_Tiles">
            <img
                className="photo"
                src={Khushabu_Kumari}
                alt="Khushabu Kumari"
            />
            <div className="Members_Description">KHUSHABU KUMARI</div>
            <div className="Members_Description">COORDINATOR</div>
            <div className="Teams_social-tray">
                <a href="https://www.linkedin.com/company/udyam/">
                    <img src={LinkedIn} className="social_icons" />
                </a>
                <a href="https://www.facebook.com/udyamfest">
                    <img src={Facebook} className="social_icons" />
                </a>
                <a href="https://www.instagram.com/udyam_iit_bhu/">
                    <img src={Instagram} className="social_icons" />
                </a>
            </div>
        </div>
    )
}
export { nisitha_vallamdasu, prajakta_priyadarsini, khushabu_kumari }
