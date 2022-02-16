import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const Developers = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">DEVELOPERS</h1>
                <div className="Teams_Tile_Container">
                    <div
                        className="Teams_Inner_Row"
                        style={{ justifyContent: 'center' }}
                    >
                        <div className="Teams_Tiles">
                            <Members.yash_jain />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.yash_garg />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.ayush_gangwani />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.atharva_bhatt />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.sarang_manerikar />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.prashasti_tripathi />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.ankur_agrawal />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.raina_jain />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.ayushi_gupta />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.sanskar_santosh_totla />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.sanidhya_taparia />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.anshuman_asauliya />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.mayank_singh />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.jayesh_upadhyay />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles1">
                            <Members.suhani_agrawal />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.riya_kanojiya />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.ayush_bemera />
                        </div>
                    </div>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.yash_jain />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.yash_garg />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ayush_gangwani />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.atharva_bhatt />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.sarang_manerikar />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.prashasti_tripathi />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ankur_agrawal />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.raina_jain />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ayushi_gupta />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.sanskar_santosh_totla />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.sanidhya_taparia />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.anshuman_asauliya />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.mayank_singh />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.jayesh_upadhyay />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.suhani_agrawal />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.riya_kanojiya />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ayush_bemera />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Developers
