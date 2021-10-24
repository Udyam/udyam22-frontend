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
        // tab with "active" class will be visible
        <div className="vertical-tabs">
            <ul
                className="tabs vertical"
                data-tab=""
                style={{ padding: '0px', margin: '0px', listStyle: 'none' }}
            >
                <li className="tab-title">
                    <Link to="/" id="panela">
                        <img src={home} />
                    </Link>
                </li>
                <li className="tab-title">
                    <Link to="/about-us" id="panelb">
                        <img src={info} />
                    </Link>
                </li>
                <li className="tab-title">
                    <Link to="/events" id="panelc">
                        <img src={event} />
                    </Link>
                </li>
                <li className="tab-title">
                    <Link to="/speakers" id="paneld">
                        <img src={speaker} />
                    </Link>
                </li>
                <li className="tab-title">
                    <Link to="/leaderboard" id="panele">
                        <img src={leaderboard} />
                    </Link>
                </li>
                <li className="tab-title">
                    <Link to="/sponsors" id="panelf">
                        <img src={sponsor} />
                    </Link>
                </li>
                <li className="tab-title">
                    <Link to="/team" id="panelg">
                        <img src={team} />
                    </Link>
                </li>
            </ul>

            <div className="tabs-content">
                <div className="content " id="panela_content"></div>
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
    )
}

export default Tabs
