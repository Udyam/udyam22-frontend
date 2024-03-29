import React from 'react'
import { useEffect } from 'react'
import './tabs_style.css'
import home from './UDYAM/home.png'
import event from './UDYAM/event.png'
import info from './UDYAM/info.png'
import leaderboard from './UDYAM/leaderboard.png'
import speaker from './UDYAM/speaker.png'
import sponsor from './UDYAM/sponsor.png'
import team from './UDYAM/team.png'
import { Link } from 'react-router-dom'

const Tabs = (props) => {
    function show(id) {
        document.getElementById(id).parentElement.classList.add('active')
        document.getElementById(id + '_content').classList.add('active')
    }

    const id = props.id

    useEffect(() => {
        show(id)
    }, [id])

    return (
        <div className="tabs_background">
            {/* // tab with "active" class will be visible */}
            <div className="Vertical-Tabs">
                <ul
                    className="Tabs-tabs vertical"
                    data-tab=""
                    style={{ padding: '0px', margin: '0px', listStyle: 'none' }}
                >
                    <li className="Tab-Title">
                        <Link to="/" id="panela">
                            <img src={home} title="Home" />
                        </Link>
                    </li>
                    <li className="Tab-Title">
                        <Link to="/about-us" id="panelb">
                            <img src={info} title="About Us" />
                        </Link>
                    </li>
                    <li className="Tab-Title">
                        <Link to="/events" id="panelc">
                            <img src={event} title="Events" />
                        </Link>
                    </li>
                    <li className="Tab-Title">
                        <Link to="/speakers" id="paneld">
                            <img src={speaker} title="Speakers" />
                        </Link>
                    </li>
                    <li className="Tab-Title">
                        <Link to="/leaderboard" id="panele">
                            <img src={leaderboard} title="Leaderboard" />
                        </Link>
                    </li>
                    <li className="Tab-Title">
                        <Link to="/sponsors" id="panelf">
                            <img src={sponsor} title="Sponsors" />
                        </Link>
                    </li>
                    <li className="Tab-Title">
                        <Link to="/team" id="panelg">
                            <img src={team} title="Team" />
                        </Link>
                    </li>
                </ul>

                <div className="Tabs-Content">
                    <div className="content" id="panela_content"></div>
                    <div className="content" id="panelb_content" tabIndex="-1">
                        {props.children}
                    </div>
                    <div className="content" id="panelc_content" tabIndex="-1">
                        {props.children}
                    </div>
                    <div className="content" id="paneld_content" tabIndex="-1">
                        {props.children}
                    </div>
                    <div className="content" id="panele_content" tabIndex="-1">
                        {props.children}
                    </div>
                    <div className="content" id="panelf_content" tabIndex="-1">
                        {props.children}
                    </div>
                    <div className="content" id="panelg_content" tabIndex="-1">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
