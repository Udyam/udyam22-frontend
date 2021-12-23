import React from 'react'
import './App.css'
import Header from './components/Navbar/Header'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { AuthProvider } from './components/authentication/authprovider'
/*import  ProtectedRoute  from './components/authentication/protectedroute'*/
function App() {
    let bgImage = { backgroundImage: 'url(./images/backgroundAlt.png)' }
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
                        {/*<ProtectedRoute>*/}
                        <Header />
                        <Routes />
                        <Footer />
                        {/*</ProtectedRoute>*/}
                    </Router>
                </div>
            </div>
        </AuthProvider>
    )
}

export default App
