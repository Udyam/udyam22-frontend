import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'

function App() {
    let bgImage = ['/dashboard', '/noticeboard'].includes(
        window.location.pathname
    )
        ? {
              backgroundImage: 'url(./images/backgroundAlt.png)',
          }
        : {
              backgroundImage: 'url(./images/background.png)',
          }

    let bgProperties = {
        height: 'auto',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }

    let style = {
        ...bgImage,
        ...bgProperties,
    }

    return (
        <div>
            <div style={style}>
                <div
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Router>
                        {window.location.pathname === '/dashboard' ? (
                            ''
                        ) : (
                            <Header />
                        )}
                        <Routes />
                    </Router>

                    {['/dashboard', '/noticeboard'].includes(
                        window.location.pathname
                    ) ? (
                        ''
                    ) : (
                        <Footer />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App