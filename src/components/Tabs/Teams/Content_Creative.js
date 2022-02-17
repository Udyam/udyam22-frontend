import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const Content_and_Creative = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">CONTENT AND CREATIVE</h1>
                <div className="Teams_Tile_Container">
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.prajakta_priyadarsini />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.nisitha_vallamdasu />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.khushabu_kumari />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.ajinkya_mohale />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.krishna_priya />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.vedant_gupta />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.ankur_agrawal_CC />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.akula_hemanth />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.kanchan />
                        </div>
                    </div>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.nisitha_vallamdasu />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.prajakta_priyadarsini />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.khushabu_kumari />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ajinkya_mohale />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.krishna_priya />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.vedant_gupta />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ankur_agrawal_CC />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.akula_hemanth />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.kanchan />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Content_and_Creative
