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
            <Route exact path="/team">
                <Tabs id="panelg"></Tabs>
            </Route>
            <Route exact path="/loginregister" component={RegisterForm}/>
            <Route exact path="/recoverpage" component={RecoverForm}/>
            <Route exact path="/resetpage" component={ResetForm}/>
            <Route exact path="/notifyreset" component={NotifyReset}/>
        </div>
    )
}

export { Routes }
