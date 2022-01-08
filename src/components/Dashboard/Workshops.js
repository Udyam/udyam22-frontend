import React from 'react'
import './Workshops.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Workshops = ({ dashboardToken }) => {
    const API_BASE_URL = 'https://udyam22-backend.herokuapp.com'

    const [workshops, setWorkshops] = useState([])

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/API/workshop/`, {
                headers: {
                    Authorization: `Token ${dashboardToken}`,
                },
            })
            .then((res) => {
                console.log('workshops=', res.data)
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
                <a
                    href="https://www.youtube.com/channel/UC8wlztNbDIu38rfQ1HChSIg"
                    className="wsLink"
                >
                    click here
                </a>
            </h4>
            <div className="py-2 workshopDetails">
                <h4 style={{ left: '4%' }}>Workshop</h4>
                <h4 style={{ left: '30%' }}>Schedule</h4>
                <h4 style={{ left: '59%' }}>Time</h4>
                <h4 style={{ right: '4%' }}>Join here</h4>
            </div>

            {workshops.map((workshop) => (
                <div className="py-2 workshopDetails" key={workshop.id}>
                    <h4 style={{ left: '4%' }}>{workshop.event}</h4>
                    <h4 style={{ left: '30%' }}>{workshop.date}</h4>
                    <h4 style={{ left: '59%' }}>{workshop.time}</h4>
                    <h4 style={{ right: '4%', paddingRight: '1em' }}>
                        <a href={workshop.url} className="wsLink">
                            Link
                        </a>
                    </h4>
                </div>
            ))}
        </div>
    )
}

export default Workshops
