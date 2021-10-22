import React from 'react'
import './InfoBox.css'

export const InfoBox = () => {
    return (
        <div>
            <ul>
                <li>
                    <div className="labels">
                        <span className="circles">•</span>
                        <span>For Queries :</span>
                    </div>
                    <ul>
                        <li>Mayank</li>
                        <li>mchakravorty.ece18@iitbhu.ac.in</li>
                    </ul>
                </li>
                <li>
                    <div className="labels">
                        <span className="circles">•</span>
                        <span>Marketing :</span>
                    </div>
                    <ul>
                        <li>Amritesh</li>
                        <li>amritesh.ece18@iitbhu.ac.in</li>
                    </ul>
                </li>
                <li>
                    <div className="labels">
                        <span className="circles">•</span>
                        <span>PR Team :</span>
                    </div>
                    <ul>
                        <li>Harshit Gupta</li>
                        <li>harshitgupta.ece18@iitbhu.ac.in</li>
                    </ul>
                </li>
                <li>
                    <div className="labels">
                        <span className="circles">•</span>
                        <span>Co-Convenor :</span>
                    </div>

                    <ul>
                        <li>Ritweek Singh</li>
                        <li>ritweeksingh.ece18@iitbhu.a</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
