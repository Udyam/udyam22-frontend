import React from 'react'
import { Link } from 'react-router-dom'
import './Workshops.css'

const Workshops = () => {
    return (
        <div className="workshopsContainer">
            <h3 style={{ fontWeight: 'normal', marginTop: '20px' }}>
                UPCOMING WORKSHOPS
            </h3>
            <h4 style={{ marginTop: '20px', color: '#CAF0F8' }}>
                To watch the previous workshops{' '}
                <Link to="#" className="wsLink">
                    click here
                </Link>
            </h4>
            <div className="py-2 workshopDetails">
                <h4>Workshop</h4>
                <h4>Schedule</h4>
                <h4>Time</h4>
                <h4>Join here</h4>
            </div>
        </div>
    )
}

export default Workshops
