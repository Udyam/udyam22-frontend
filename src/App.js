import './App.css'
import Header from './components/Header.js'
import ToggleMenu from './components/ToggleMenu'

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
                <div>
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default App
