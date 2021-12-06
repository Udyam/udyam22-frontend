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
import NoticeBoard from './components/NoticeBoard/NoticeBoard'
import Dashboard from './components/Dashboard/Dashboard.js'

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
            <Route exact path="/loginregister" component={RegisterForm} />
            <Route exact path="/recoverpage" component={RecoverForm} />
            <Route exact path="/resetpage" component={ResetForm} />
            <Route exact path="/notifyreset" component={NotifyReset} />
            <Route path="/noticeboard">
                <NoticeBoard />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard id="panela" />
            </Route>
        </div>
    )
}

export { Routes }
