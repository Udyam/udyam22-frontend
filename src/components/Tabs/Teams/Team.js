import React from "react"
import "../tabs_style.css"
import "./Teams_Style.css"
import TeamHead from "./TeamHead.png"


const Team = () => {

    return (
        <>
        <img className = "Team_Heading"
            src={TeamHead} alt="Team_Heading"
        />

        <div className = "container">
            
            <li className = "inner_box"
             to = "/team/core_team">
            CORE TEAM
            </li>
        
            <li className = "inner_box"
             to = "/team/senior_advisors">
            SENIOR ADVISORS
            </li>

            <li className = "inner_box" 
             to = "/team/developers">
            DEVELOPERS
            </li>

            <li className = "inner_box" 
             to = "/team/designers">
            DESIGNERS
            </li>

            <li className = "inner_box"
             to = "/team/content_and_creative">
                CONTENT AND CREATIVE
            </li>

            <li className = "inner_box" 
             to = "/team/marketing_team">
                MARKETING TEAM
            </li>

            <li className = "inner_box" 
             to = "/team/external_affairs">
                EXTERNAL AFFAIRS
            </li>

            <li className = "inner_box" 
             to = "/team/public_relations">
                PUBLIC RELATIONS
            </li>

        </div>

        </>
    )
}

export default Team

