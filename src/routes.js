import React from 'react'
import LandingPage from './components/LandingPage/LandingPage.js'
import Tabs from './components/Tabs/Tabs.js'
import Timeline from './components/Timeline/Timeline'
import { ContactPage } from './components/ContactPage/ContactPage'
import { Route } from 'react-router-dom'
import Team from './components/Tabs/Teams/Team.js'
import AboutUs from './components/Tabs/AboutUs/AboutUs.js'
import Sponsors from './components/Tabs/Sponsors/Sponsors.js'
import Event from './components/Tabs/Events/Events.js'

const Routes = () => {
    return (
        <div>
            <Route exact path="/">
                <LandingPage />
                <Timeline />
                <ContactPage />
            </Route>
            <Route exact path="/about-us">
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
                <Tabs id="paneld"></Tabs>
            </Route>
            <Route exact path="/leaderboard">
                <Tabs id="panele"></Tabs>
            </Route>
            <Route exact path="/sponsors">
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
