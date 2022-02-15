import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const Marketing_Team = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">MARKETING TEAM</h1>
                <div className="Teams_Tile_Container">
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.somesh_dey />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.prajakta_priyadarsini_head />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.varsha_jangir />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.nikhil_singh />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.vikrant />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.riya_kanojiya_marketing />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.yashank_aggarwal />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.korivi_vedharshini />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.pratishtha_dhiraj />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.nishtanth_gounder />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.priya_meena />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.nelson_rahul_tigga />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.deependra_singh />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.anurup_krishna />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.mohit_kumar_sharma />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.pushpam_berlia />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.srini_rohan />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.shubham_gond />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.op_nisad />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.suhani_agrawal_marketing />
                        </div>
                    </div>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.prajakta_priyadarsini_head />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.somesh_dey />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.varsha_jangir />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.nikhil_singh />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.vikrant />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.riya_kanojiya_marketing />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.yashank_aggarwal />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.korivi_vedharshini />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.pratishtha_dhiraj />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.nishtanth_gounder />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.priya_meena />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.nelson_rahul_tigga />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.deependra_singh />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.anurup_krishna />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.mohit_kumar_sharma />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.pushpam_berlia />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.srini_rohan />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.shubham_gond />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.op_nisad />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.suhani_agrawal_marketing />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Marketing_Team
