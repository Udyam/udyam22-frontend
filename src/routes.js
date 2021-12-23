import React from 'react'
import LandingPage from './components/LandingPage/LandingPage.js'
import Timeline from './components/Timeline/Timeline'
import { ContactPage } from './components/ContactPage/ContactPage'
import { Route } from 'react-router-dom'
import Tabs from './components/Tabs/Tabs.js'
import RegisterForm from './components/authentication/loginregform'
import RecoverForm from './components/authentication/recoverpage'
import ResetForm from './components/authentication/resetpage'
import NotifyReset from './components/authentication/notifyreset'
import ComingSoon from './components/authentication/registration'
import Team from './components/Tabs/Teams/Team.js'
import NoticeBoard from './components/NoticeBoard/NoticeBoard'
import Dashboard from './components/Dashboard/Dashboard.js'
import ProtectedRoute  from './components/authentication/protectedroute'
import RouteProtected  from './components/authentication/protectedroute'


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
            <RouteProtected exact path="/loginregister" component={RegisterForm} />
            <Route exact path="/recoverpage" component={RecoverForm} />
            <Route exact path="/resetpage" component={ResetForm} />
            <Route exact path="/notifyreset" component={NotifyReset} />
            <ProtectedRoute exact path="/comingsoon" component={ComingSoon} />
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
