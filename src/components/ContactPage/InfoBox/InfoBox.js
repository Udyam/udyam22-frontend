import React from 'react'
import './InfoBox.css'

export const InfoBox = () => {
    return (
        <div id="info-box-container">
            <ul className="info-box-list">
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">For Queries :</span>
                    </div>
                    <ul className="info-box-list">
                        <li className="info-box-list-item">Mayank</li>
                        <li className="info-box-list-item">
                            mchakravorty.ece18@iitbhu.ac.in
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">Marketing :</span>
                    </div>
                    <ul className="info-box-list">
                        <li className="info-box-list-item">Amritesh</li>
                        <li className="info-box-list-item">
                            amritesh.ece18@iitbhu.ac.in
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">PR Team :</span>
                    </div>
                    <ul className="info-box-list">
                        <li className="info-box-list-item">Harshit Gupta</li>
                        <li className="info-box-list-item">
                            harshitgupta.ece18@iitbhu.ac.in
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">Co-Convenor :</span>
                    </div>

                    <ul className="info-box-list">
                        <li className="info-box-list-item">Ritweek Singh</li>
                        <li className="info-box-list-item">
                            ritweeksingh.ece18@iitbhu.ac.in
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
