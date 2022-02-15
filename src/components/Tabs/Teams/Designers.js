import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const Designers = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">DESIGNERS</h1>
                <div className="Teams_Carousel_Container">
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.siddharth_anand_srivastav_head />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.raj_aryan_srivastava />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.pratik_mishra />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.devi_tanuja_vasamsetty />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.shivansh_dubey />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.vislavath_swetha />
                        </div>
                    </div>
                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.manoj_gupta />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.kalpit_adhao />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.archit_soni />
                        </div>
                    </div>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.siddharth_anand_srivastav_head />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.raj_aryan_srivastava />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.pratik_mishra />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.devi_tanuja_vasamsetty />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.shivansh_dubey />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.vislavath_swetha />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.manoj_gupta />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.kalpit_adhao />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.archit_soni />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Designers
