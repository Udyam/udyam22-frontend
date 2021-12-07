import React from 'react'
import './AboutUs.css'
import '../tabs_style.css'
import aboutUs_heading from './AboutUs_heading.png'
import aboutUs_img from './AboutUs_img.png'
import aboutUs_text from './AboutUs_text.png'

const AboutUs = () => {
    return (
        <div>
            <div className="aboutUs_head">
                <img className="aboutUs_heading" align="right" src={aboutUs_heading} />
            </div>
            <div className="Aboutus-container">
                <div className="aboutUs_photo">
                    <img className="aboutUs-img" src={aboutUs_img} />
                </div>
                <div className="aboutUs_photo">
                    <img className="aboutUs-img" src={aboutUs_text} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
