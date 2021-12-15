import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { AuthProvider } from './components/authentication/authprovider'
function App() {
    let bgImage = [
        '/dashboard',
        '/noticeboard',
        '/resetpage',
        '/recoverpage',
        '/notifyreset',
        '/loginregister',
        '/comingsoon',
    ].includes(window.location.pathname)
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
        <AuthProvider>
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
                            {[
                                '/dashboard',
                                '/resetpage',
                                '/recoverpage',
                                '/notifyreset',
                                '/comingsoon',
                            ].includes(window.location.pathname) ? (
                                ''
                            ) : (
                                <Header />
                            )}
                            <Routes />
                        </Router>

                        {[
                            '/dashboard',
                            '/noticeboard',
                            '/resetpage',
                            '/recoverpage',
                            '/notifyreset',
                            '/comingsoon',
                        ].includes(window.location.pathname) ? (
                            ''
                        ) : (
                            <Footer />
                        )}
                    </div>
                </div>
            </div>
        </AuthProvider>
    )
}

export default App
