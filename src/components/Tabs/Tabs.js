import React from 'react'

import './tabs_style.css'
import home from './UDYAM/home.png'
import event from './UDYAM/event.png'
import info from './UDYAM/info.png'
import leaderboard from './UDYAM/leaderboard.png'
import speaker from './UDYAM/speaker.png'
import sponsor from './UDYAM/sponsor.png'
import team from './UDYAM/team.png'

const Tabs = () => {
    function show_tab_item(e) {
        e.preventDefault()
        const id = e.target.id

        document.getElementsByClassName('active')[0].classList.remove('active')
        document.getElementsByClassName('active')[0].classList.remove('active')

        e.target.parentElement.classList.add('active')
        document.getElementById(id + '_content').classList.add('active')
    }

    return (
        // tab with "active" class will be visible

        <div className="vertical-tabs">
            {/* <div className="container vertical-tabs"> */}

            <ul
                className="tabs vertical"
                data-tab=""
                style={{ padding: '0px', margin: '0px', listStyle: 'none' }}
            >
                <li className="tab-title">
                    <img
                        src={home}
                        id="panela"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
                <li className="tab-title active">
                    <img
                        src={info}
                        id="panelb"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
                <li className="tab-title">
                    <img
                        src={event}
                        id="panelc"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
                <li className="tab-title">
                    <img
                        src={speaker}
                        id="paneld"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
                <li className="tab-title">
                    <img
                        src={leaderboard}
                        id="panele"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
                <li className="tab-title">
                    <img
                        src={sponsor}
                        id="panelf"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
                <li className="tab-title">
                    <img
                        src={team}
                        id="panelg"
                        tabIndex="-1"
                        onClick={show_tab_item}
                    />
                </li>
            </ul>

            <div className="tabs-content">
                <div className="content " id="panela_content">
                    <h1>HOME</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati illo ullam vitae ut, rem voluptas vero nulla
                        dolorem architecto asperiores sapiente voluptatum
                        tempore consectetur ipsam quis error maiores in dolorum
                        officiis porro. Expedita aliquid culpa tempore ea nulla
                        fugiat atque vel nobis, sapiente architecto? Saepe
                        accusamus velit corrupti beatae magni.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati illo ullam vitae ut, rem voluptas vero nulla
                        dolorem architecto asperiores sapiente voluptatum
                        tempore consectetur ipsam quis error maiores in dolorum
                        officiis porro. Expedita aliquid culpa tempore ea nulla
                        fugiat atque vel nobis, sapiente architecto? Saepe
                        accusamus velit corrupti beatae magni.
                    </p>
                </div>
                <div
                    className="content active"
                    id="panelb_content"
                    tabIndex="-1"
                >
                    <h1>INFORMATION</h1>
                </div>
                <div className="content" id="panelc_content" tabIndex="-1">
                    <h1>EVENT</h1>
                </div>
                <div className="content" id="paneld_content" tabIndex="-1">
                    <h1>SPEAKER</h1>
                </div>
                <div className="content" id="panele_content" tabIndex="-1">
                    <h1>LEADERBOARD</h1>
                </div>
                <div className="content" id="panelf_content" tabIndex="-1">
                    <h1>SPONSOR</h1>
                </div>
                <div className="content" id="panelg_content" tabIndex="-1">
                    <h1>TEAM</h1>
                </div>
            </div>
        </div>
    )
}

export default Tabs
