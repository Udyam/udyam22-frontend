import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import  {AuthProvider}  from './components/authentication/authprovider';
function App() {
    let bgImage =
        window.location.pathname == '/dashboard'
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
                        {window.location.pathname == '/dashboard' ? (
                            ''
                        ) : (
                            <Header />
                        )}
                        <Routes />
                   
                    </Router>

                    {window.location.pathname === '/dashboard' ? (
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