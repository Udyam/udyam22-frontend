import React from 'react'
import './App.css'
import Header from './components/Header.js'
import RegisterForm from './components/loginregform'
function App() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'url(./images/background.png)',
                    height: 'auto',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }}
            > <Header />
                    <RegisterForm />
                </div>
            
        </div>
    )
}

export default App
