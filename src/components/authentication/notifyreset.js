import React from 'react'
import './notifyreset.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
export default function NotifyReset() {
    return (
        <div className='wholepage' >
        <div className='logocircle12' >
            <img
                            src="../images/udyamLogo.png"
                            className="Udyamlogo12"
                            alt="Udyam"
                        />
            </div>
            <div className="notifyreset-form-container">
                <h1 className="notifyreset-form-head"> Your password is changed successfully !!! </h1><br/>
                <h1 className="notifyreset-form-head">you can <Router><Link to="/loginregister" className="redirectnotify">login</Link></Router> here</h1>
\
            </div>
            </div>
     
    )

}