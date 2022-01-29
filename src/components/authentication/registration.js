import React from 'react'
import './registration.css'

const ComingSoon = () => {
    return (
        <div className="profileContainer">
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <h4 style={{ fontWeight: '600', marginTop: '20px' }}>
                        The login and register process will resume again from
                        1st of Feb 2022.
                    </h4>
                    <h4 style={{ fontWeight: '600', marginTop: '20px' }}>
                        For more information, join our{' '}
                        <a
                            href="https://discord.gg/gNrEW8vp4G"
                            style={{ textDecoration: 'none' }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            discord server.
                        </a>
                    </h4>
                </li>
            </ul>
        </div>
    )
}

export default ComingSoon
