import React, { useState } from 'react'
import './speakers.css'

function Card(props) {
    const [isHovering, setIsHovering] = useState('visible')
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
            <a href={props.instagram} style={{ display: isHovering }}>
                <img src="./images/instagram_logo.png" />
            </a>
            <a href={props.twitter} style={{ display: isHovering }}>
                <img src="./images/twitter_logo" />
            </a>
            <a href={props.facebook} style={{ display: isHovering }}>
                <img src="./images/facebook_logo" />
            </a>
        </dt>
    )
}
export default Card
