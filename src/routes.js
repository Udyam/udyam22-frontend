import React from 'react'
import LandingPage from './components/LandingPage/LandingPage.js'
import Timeline from './components/Timeline/Timeline'
import { Route } from 'react-router-dom'

const Routes = () => {
    return (
        <div>
            <Route exact path="/">
                <LandingPage />
                <Timeline />
            </Route>
        </div>
    )
}

export { Routes }
