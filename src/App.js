import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'

function App() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'url(/images/background.png)',
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

                    <Router>
                        <Routes />
                    </Router>

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
