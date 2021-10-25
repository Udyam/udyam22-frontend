import React from "react";

import Data from "./Speakers_info.js";
import Card from "./Card.jsx";


function CreateCard(parts){

    return  <Card name={parts.name}
    about={parts.about}
    pp={parts.pp}
    twitter={parts.twitter_url}
    instagram={parts.instagram_url}
    facebook={parts.facebook_url}
    />
}

function Speakers(){

    return <div className="INF">
        <img className="images" alt="Logo" src="./images/Speakers_Logo.png"/>
        <dl  >
            {Data.map(CreateCard)}
        </dl>
    </div>
}

export default Speakers;