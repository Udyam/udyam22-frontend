import React from 'react'
import './SponsorsFrontPage.css'
import custkart from './sponsor_images/Custkart.png'
import growthschool from './sponsor_images/GrowthSchool.png'
import silencelabs from './sponsor_images/SilenceLabs.png'
import nullcon from './sponsor_images/Nullcon.png'
import circuitsutra from './sponsor_images/CircuitSutra.png'
import sensovision from './sponsor_images/SensoVision.png'

const SponsorsFrontPage = () => {
    return (
        <div
            className="sponsor-front-container"
            style={{ margin: '4em 3em 0 3em' }}
        >
            <h1 id="sponsor-front-head">Events Sponsor</h1>
            <div className="card-group">
                <div className="card">
                    <a href="https://silencelaboratories.com/">
                        <img
                            className="card-img-top"
                            src={silencelabs}
                            alt="Card image cap"
                        />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Silence Laboratories</h5>
                        <p className="card-text">
                            Silence Laboratories aims to provide the fastest and
                            seamless authentication that binds nuances of
                            security, design science, and usability altogether
                            under the leadership of its founder, Mr Jay Prakash.
                            They bring multi-sensor signal fusion for context
                            intelligence and authentication checks.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <a href="https://www.sensoviz.com/">
                        <img
                            className="card-img-top my-4"
                            src={sensovision}
                            alt="Card image cap"
                        />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">SensoVision</h5>
                        <p className="card-text">
                            Senso Vision is a technology development and
                            consulting start-up working in Computer Vision,
                            Machine Learning, IoT, Drone-Autonomy and Media
                            Streaming. It has been working as a reliable partner
                            of machine builders, vision system integrators and
                            industrial end-users for meeting out the need of
                            quality inspection focussed software and solutions.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <a href="https://nullcon.net/berlin-2022">
                        <img
                            className="card-img-top"
                            src={nullcon}
                            alt="Card image cap"
                        />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Nullcon</h5>
                        <p className="card-text">
                            Nullcon International Security Conference and
                            Training has always been a pioneer in presenting
                            cutting-edge research in the security domain.
                            Started in India since 2010, we are now expanding
                            our first edition to Berlin, Germany. The focus of
                            the conference is to showcase the next generation of
                            offensive and defensive security technology. Nullcon
                            is an integrated and structured platform that caters
                            to the needs of the IT security professionals at
                            large in a comprehensive way.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <a href=" https://www.circuitsutra.com/">
                        <img
                            className="card-img-top"
                            src={circuitsutra}
                            alt="Card image cap"
                        />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">CircuitSutra</h5>
                        <p className="card-text">
                            CircuitSutra is an Electronics System Level (ESL)
                            design IP and services company headquartered in
                            India, having its offices in Noida, Bangalore, and
                            Santa Clara (USA). It enables customers to adopt
                            advanced methodologies based on C, C++,
                            SystemC/TLM2.0 (IEEE 1666-2011), Python, UPF3.0
                            (IEEE 1801-2015), IP-XACT (IEEE 1685-2014), Portable
                            Stimulus. CircuitSutra is the only company that is
                            100% focused on ESL Methodologies and understands
                            all aspects of the ESL domain.
                        </p>
                    </div>
                </div>
            </div>
            <h1 id="sponsor-front-head">Educational Partner</h1>
            <div className="card-group">
                <div className="card">
                    <a href=" https://growthschool.io/">
                        <img
                            className="card-img-top"
                            src={growthschool}
                            alt="Card image cap"
                        />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">GrowthSchool</h5>
                        <p className="card-text">
                            Bengaluru-based GrowthSchool is a community-led live
                            learning platform. Growth School partners with the
                            top 1% of instructors to create high-impact
                            cohort-based courses on personal and professional
                            growth for learners all over the world. GrowthSchool
                            brings in the top mentors who teach real, actional,
                            and practical things that you can apply in the real
                            world. With a community of over 1,80,000 students,
                            50 mentors, and an average rating of 9.1, Growth
                            School is all set to redefine live online learning.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <h1 id="sponsor-front-head">Merchandise Partner</h1>
                <div className="card">
                    <a href="#">
                        <img
                            className="card-img-top"
                            src={custkart}
                            alt="Card image cap"
                        />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Custkart</h5>
                        <p className="card-text">
                            Custkart Merchandise Store has provided the finest
                            quality of customizable T-shirts, hoddies,
                            track-suits, school uniforms, and corporate kits for
                            the past two years. They believe in offering the
                            best quality and keeping their products up to the
                            expectations of their clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorsFrontPage
