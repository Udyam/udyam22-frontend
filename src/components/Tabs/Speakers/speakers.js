import React from 'react'
import Data from './Speakers_info.jsx'
import Card from './Card.js'

function CreateCard(parts) {
    return (
        <Card
            name={parts.name}
            about={parts.about}
            pp={parts.pp}
            linkedin={parts.linkedin_url}
            twitter={parts.twitter_url}
            facebook={parts.facebook_url}
        />
    )
}

function Speakers() {
    return (
        <div className="INF" id="Speakers_Scrollbar">
            <h1 className="Speakers_head">PREVIOUS SPEAKERS</h1>
            <dl>{Data.map(CreateCard)}</dl>
        </div>
    )
}

export default Speakers
