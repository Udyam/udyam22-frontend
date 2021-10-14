import React from 'react'
import './App.css'
import Header from './components/Header.js'
import { Footer } from './components/Footer/Footer'

function App() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'url(./images/background.png)',
                    height: '100vh',
                    backgroundSize: 'cover',
                }}
            >
                <div style = {{ minHeight:"100vh", display:"flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Header />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
