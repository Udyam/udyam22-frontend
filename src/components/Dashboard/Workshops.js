import React from 'react'
import { Link } from 'react-router-dom'
import './Workshops.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Workshops = () => {
    const API_BASE_URL='https://udyam22-backend.herokuapp.com'

    const [workshops, setWorkshops] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/API/workshop/`,{
                headers: {
                    'Authorization': "Token d102f9b8531448411f3658ecfdeeee5b0fbf2a17"
                }
        })
        .then(res => {
            console.log("workshops=", res.data);
            setWorkshops(res.data)
        })
    }, [])
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

            {workshops.map(workshop => (    
                <div className="py-2 workshopDetails" key={workshop.id}>
                    <h4>{workshop.name}</h4>
                    <h4>{workshop.schedule}</h4>
                    <h4>{workshop.time}</h4>
                    <h4>
                        <Link to={`/workshop/${workshop.id}`}>
                            Join here
                        </Link>
                    </h4>
                </div>
            ))}
        </div>
    )
}

export default Workshops
