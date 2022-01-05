import React, { useState } from 'react'
import './speakers.css'
import facebook_logo from './Speakers_images/facebook_logo.png'
import twitter_logo from './Speakers_images/twitter_logo.png'
import linkedin_logo from './Speakers_images/linkedin_logo.png'

function Card(props) {
    const [isHovering, setIsHovering] = useState('none')
    function handleMouseOver() {
        setIsHovering('block')
    }
    function handleMouseout() {
        setIsHovering('none')
    }
    return (
        <dt
            className="ayush"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseout}
        >
            <img className="pp" src={props.pp} />
            <h3 className="name">{props.name}</h3>
            <p className="info">{props.about}</p>

            <div>
                <a
                    href={props.linkedin}
                    style={{
                        display: isHovering,
                        position: 'relative',
                        right: '80px',
                    }}
                >
                    <img src={linkedin_logo} />
                </a>
                <a
                    href={props.twitter}
                    style={{
                        display: isHovering,
                        position: 'relative',
                        bottom: '60px',
                    }}
                >
                    <img src={twitter_logo} />
                </a>
                <a
                    href={props.facebook}
                    style={{
                        display: isHovering,
                        position: 'relative',
                        left: '80px',
                        bottom: '120px',
                    }}
                >
                    <img src={facebook_logo} />
                </a>
            </div>
        </dt>
    )
}
export default Card
