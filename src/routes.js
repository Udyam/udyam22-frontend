import React from 'react'
import LandingPage from './components/LandingPage/LandingPage.js'
import Tabs from './components/Tabs/Tabs.js'
import Timeline from './components/Timeline/Timeline'
import { ContactPage } from './components/ContactPage/ContactPage'
import { Route } from 'react-router-dom'

const Routes = () => {

    return (
        <div>
            <Route exact path="/">
                <LandingPage />
                <Timeline />
                <ContactPage />
            </Route>
            <Route exact path="/about-us">
                <Tabs id = "panelb"/>
            </Route>
            <Route exact path="/events">
                <Tabs id = "panelc"/>
            </Route>
            <Route exact path="/speakers">
                <Tabs id = "paneld"/>
            </Route>
            <Route exact path="/leaderboard">
                <Tabs id = "panele"/>
            </Route>
            <Route exact path="/sponsors">
                <Tabs id = "panelf"/>
            </Route>
            <Route exact path="/team">
                <Tabs id = "panelg"/>
            </Route>
        </div>
    )
}

export { Routes }
