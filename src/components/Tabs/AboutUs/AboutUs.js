import React from 'react'
import './AboutUs.css'
import '../tabs_style.css'
import aboutUs_heading from './AboutUs_heading.png'
import aboutUs_img from './AboutUs_img.png'

const AboutUs = () => {
    return (
        <div>
            <div className="aboutUs_head">
                <img
                    className="aboutUs_heading"
                    align="right"
                    src={aboutUs_heading}
                />
            </div>
            <div className="Aboutus-container">
                <div className="aboutUs_photo">
                    <img className="aboutUs-img" src={aboutUs_img} />
                </div>
                <div className="aboutUs_content">
                    <div className="Aboutus_content_Text">
                        <p>
                            UDYAM is the Annual Technical Festival of the
                            Department of Electronics Engineering, IIT (BHU)
                            Varanasi. UDYAM offers an opportunity for students
                            to treat themselves to a technical extravaganza. It
                            gives you a chance to be more actively involved in
                            the learning experience at the heart of effective
                            technology integration. It is a means for students
                            to showcase their practical talent in their learning
                            and not just limit themselves to theoretical
                            knowledge. With this idea of an application-oriented
                            approach, UDYAM started in 2010 with a vision of
                            providing a platform for the community of Indian
                            students to develop and showcase their technical
                            prowess. It is not just these head to head
                            competitions that you can get at Udyam. It is the
                            events that make you proficient with the industry
                            standards. The limelight is on you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
