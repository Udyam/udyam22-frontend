import React from 'react'
import Data from './Speakers_info.jsx'
import Card from './Card.js'
import Speakers_logo from './Speakers_images/Speakers_logo.png'

function CreateCard(parts) {
    return (
        <Card
            name={parts.name}
            about={parts.about}
            pp={parts.pp}
            twitter={parts.twitter_url}
            instagram={parts.instagram_url}
            facebook={parts.facebook_url}
        />
    )
}

function Speakers() {
    return (
        <div className="INF">
            <img
                className="speakers_images"
                alt="Logo"
                src= {Speakers_logo}
            />
            <dl>{Data.map(CreateCard)}</dl>
        </div>
    )
}

export default Speakers