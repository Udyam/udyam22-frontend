import React, { useState } from 'react'
import './speakers.css'
import facebook_logo from './Speakers_images/facebook_logo.png'
import twitter_logo from './Speakers_images/twitter_logo.png'
import linkedin_logo from './Speakers_images/linkedin_logo.png'

function Card(props) {
    const [isHovering, setIsHovering] = useState('none')
    function handleMouseOver() {
        setIsHovering('inline')
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
                        margin: '25px,25px',
                    }}
                >
                    <img src={linkedin_logo} />
                </a>
                <a
                    href={props.twitter}
                    style={{
                        display: isHovering,
                        margin: '25px',
                    }}
                >
                    <img src={twitter_logo} />
                </a>
                <a
                    href={props.facebook}
                    style={{
                        display: isHovering,
                    }}
                >
                    <img src={facebook_logo} />
                </a>
            </div>
        </dt>
    )
}
export default Card
