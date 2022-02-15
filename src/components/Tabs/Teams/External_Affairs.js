import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const External_Affairs = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">EXTERNAL AFFAIRS</h1>
                <div className="Teams_Tile_Container">
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.kushagra_yadav />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.aman_kumar />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.vikash_prajapati />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.ankit />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.saurabh_maurya />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.balaka_devivaraprasad />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.vedanth_powar />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.sachin_shaw />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.saumya_chaudhary />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.shashi_kant />
                        </div>
                    </div>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.aman_kumar />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.kushagra_yadav />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.vikash_prajapati />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ankit />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.saurabh_maurya />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.balaka_devivaraprasad />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.vedanth_powar />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.sachin_shaw />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.saumya_chaudhary />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.shashi_kant />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default External_Affairs
