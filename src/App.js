import React from 'react'
import './App.css'
import Header from './components/Header.js'
import Timeline from './components/Timeline'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: 'url(./images/background.png)',
                    height: 'auto',
                    backgroundSize: 'cover',
                    backgroundAttachment:'fixed'
                }}
            >
                <div>
                    <Header />
                    <Timeline/>
                </div>
            </div>
        </div>
    )
}

export default App
