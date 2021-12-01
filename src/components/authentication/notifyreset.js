import React from 'react'
import './notifyreset.css'
import {  Link } from 'react-router-dom'
export default function NotifyReset() {
    return (
        <div className='wholepage' >
        <div className='logocircle12' >
            <img
                            src="../images/photo_2021-11-27_18-13-10.png"
                            className="Udyamlogo12"
                            alt="Udyam"
                        />
            </div>
            <div className="notifyreset-form-container">
            <div className="noti">
                <h1 className="notifyreset-form-head"> Your password is changed successfully!!! </h1><br/>
                <h1 className="notifyreset-form-head">you can <Link to="/loginregister" className="redirectnotify">login</Link> here</h1>
       </div>
            </div>
            </div>
     
    )

}