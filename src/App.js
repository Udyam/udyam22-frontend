import React from 'react'
import './App.css'
import Header from './components/Header.js'
import RegisterForm from './components/loginregform.js'

function App() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'url(./images/background.png)',
                    height: '100vm',
                    backgroundSize: 'cover',
                }}
            >
                <div>
                    <Header />
                </div>
                <div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default App
