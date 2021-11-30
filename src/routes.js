import React from 'react'
import LandingPage from './components/LandingPage/LandingPage.js'
import Tabs from './components/Tabs/Tabs.js'
import Timeline from './components/Timeline/Timeline'
import { ContactPage } from './components/ContactPage/ContactPage'
import { Route } from 'react-router-dom'
import Team from './components/Tabs/Teams/Team.js'
import NoticeBoard from './components/NoticeBoard/NoticeBoard'

const Routes = () => {
    return (
        <div>
            <Route exact path="/">
                <LandingPage />
                <Timeline />
                <ContactPage />
            </Route>
            <Route exact path="/about-us">
                <Tabs id="panelb"></Tabs>
            </Route>
            <Route exact path="/events">
                <Tabs id="panelc"></Tabs>
            </Route>
            <Route exact path="/speakers">
                <Tabs id="paneld"></Tabs>
            </Route>
            <Route exact path="/leaderboard">
                <Tabs id="panele"></Tabs>
            </Route>
            <Route exact path="/sponsors">
                <Tabs id="panelf"></Tabs>
            </Route>
            <Route path="/team">
                <Tabs id="panelg">
                    <Team />
                </Tabs>
            </Route>
            <Route path="/noticeboard">
                <NoticeBoard />
            </Route>
        </div>
    )
}

export { Routes }
