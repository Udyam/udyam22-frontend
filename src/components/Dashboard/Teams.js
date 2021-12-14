import React from 'react'
import Team from './Team.js'

const Teams = () => {
    const events = {
        eventsList: [
            {
                eventName: 'Funckit',
                teamName: 'InFerno',
                members: [
                    'Riya Saini',
                    'Tanuja Vasamsetty',
                    'Swetha Vislavath',
                ],
            },
            {
                eventName: 'Digisim',
                teamName: 'InFerno',
                members: [
                    'Riya Saini',
                    'Tanuja Vasamsetty',
                    'Swetha Vislavath',
                ],
            },
        ],
    }

    return (
        <div>
            {events.eventsList.length === 0 ? (
                <h5 style={{ paddingTop: '10px' }}>No teams yet.</h5>
            ) : (
                events.eventsList.map((event) => {
                    return (
                        <Team
                            key={event.eventName}
                            eventName={event.eventName}
                            teamName={event.teamName}
                            members={event.members}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Teams
