import React from 'react'
import './App.css'
import Header from './components/Navbar/Header'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { AuthProvider } from './components/authentication/authprovider'
import { Dashstateprovider } from './components/authentication/Context/dashstateprovider'
function App() {
    let bgImage = { backgroundImage: 'url(/images/backgroundAlt.jpg)' }
    let bgProperties = {
        height: 'auto',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
    if (window.location.pathname == '/dashboard')
        bgImage = { backgroundImage: 'url(/images/background.jpg)' }
    let style = {
        ...bgImage,
        ...bgProperties,
    }

    return (
        <AuthProvider>
            <Dashstateprovider>
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
                            <Header />
                            <Routes />
                            <Footer />
                        </Router>
                    </div>
                </div>
            </Dashstateprovider>
        </AuthProvider>
    )
}

export default App
