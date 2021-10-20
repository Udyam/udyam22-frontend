import React from 'react'
import './App.css'
import Header from './components/Header.js'
import LandingPage from './components/LandingPage/LandingPage.js'
import Timeline from './components/Timeline/Timeline'
import { Footer } from './components/Footer/Footer'
import { ContactPage } from './components/ContactPage/ContactPage'

function App() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'url(./images/background.png)',
                    height: 'auto',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Header />
                    <LandingPage />
                    <Timeline />
                    <ContactPage />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
