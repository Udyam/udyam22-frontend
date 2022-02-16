import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const Senior_Advisors = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">SENIOR ADVISORS</h1>
                <div className="Teams_Tile_Container">
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.easwaravaka_dinesh_reddy />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.samarth_solanki />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ankur_agrawal_SA />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.akshat_goyal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.alavala_suhas />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ishaan_amrit />
                        </div>
                    </div>
                </div>

                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.easwaravaka_dinesh_reddy />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.samarth_solanki />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.ankur_agrawal_SA />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.akshat_goyal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.alavala_suhas />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.ishaan_amrit />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Senior_Advisors
