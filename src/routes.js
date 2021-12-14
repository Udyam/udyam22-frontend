import React from 'react'
import LandingPage from './components/LandingPage/LandingPage.js'
import Tabs from './components/Tabs/Tabs.js'
import Timeline from './components/Timeline/Timeline'
import { ContactPage } from './components/ContactPage/ContactPage'
import { Route } from 'react-router-dom'
import RegisterForm from './components/authentication/loginregform'
import RecoverForm from './components/authentication/recoverpage'
import ResetForm from './components/authentication/resetpage'
import NotifyReset from './components/authentication/notifyreset'
import Team from './components/Tabs/Teams/Team.js'
import Sponsors from './components/Tabs/Sponsors/Sponsors.js'
import Event from './components/Tabs/Events/Events.js'
import Leaderboard from './components/Tabs/Leaderboard/Leaderboard.js'
import AboutUs from './components/Tabs/AboutUs/AboutUs.js'
import Speakers from './components/Tabs/Speakers/speakers.js'

const Routes = () => {
    return (
        <div>
            <Route exact path="/">
                <LandingPage />
                <Timeline />
                <ContactPage />
            </Route>
            <Route path="/about-us">
                <Tabs id="panelb">
                    <AboutUs />
                </Tabs>
            </Route>
            <Route path="/events">
                <Tabs id="panelc">
                    <Event />
                </Tabs>
            </Route>
            <Route exact path="/speakers">
                <Tabs id="paneld">
                {Speakers()}
                </Tabs>
            </Route>
            <Route path="/leaderboard">
                <Tabs id="panele">
                    <Leaderboard />
                </Tabs>
            </Route>
            <Route path="/sponsors">
                <Tabs id="panelf">
                    <Sponsors />
                </Tabs>
            </Route>
            <Route path="/team">
                <Tabs id="panelg">
                    <Team />
                </Tabs>
            </Route>
        </div>
    )
}

export { Routes }
