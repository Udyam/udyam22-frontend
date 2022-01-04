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
                        <li className="info-box-list-item">Aman Kumar</li>
                        <li className="info-box-list-item">
                            aman.kumar.ece19@itbhu.ac.in
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">Marketing :</span>
                    </div>
                    <ul className="info-box-list">
                        <li className="info-box-list-item">
                            Prajakta Priyadarsini
                        </li>
                        <li className="info-box-list-item">
                            prajakta.priyadarsini.ece19@itbhu.ac.in
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">PR Team :</span>
                    </div>
                    <ul className="info-box-list">
                        <li className="info-box-list-item">
                            Prince Kumar Gond
                        </li>
                        <li className="info-box-list-item">
                            princekumar.gond.ece19@itbhu.ac.in
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="info-box-labels">
                        <span className="info-box-circles">•</span>
                        <span className="info-box-span">Co-Convenor :</span>
                    </div>

                    <ul className="info-box-list">
                        <li className="info-box-list-item">Akshat Jain</li>
                        <li className="info-box-list-item">
                            akshat.rajkumarjain.ece19@itbhu.ac.in
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
