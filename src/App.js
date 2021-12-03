import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import  {AuthProvider}  from './components/authentication/authprovider';
function App() {

    return (
        <AuthProvider>
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
                    <Router>
                        <Header />
                        <Routes />
                   
                    </Router>

                    <Footer />
                    
                </div>
            </div>
        </div>
        </AuthProvider>
    )
}

export default App