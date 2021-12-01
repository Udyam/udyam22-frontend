import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { AuthContext } from './components/authentication/Context/AuthContext';
import  { useState} from 'react';

function App() {
    const [token, setToken] = useState(null);
    const [data, setData] = useState({});
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
                    <Router>
                        <Header />
                        <Routes />
                   
                    </Router>

                    <Footer />
                    <AuthContext.Provider
                        value={{
                        token: token,
                        data: data,
                        setToken: setToken,
                        setData: setData,
                       }}
                    >
          
                    </AuthContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default App