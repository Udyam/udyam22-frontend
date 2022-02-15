import React from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'

const Public_Relations = () => {
    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">PUBLIC RELATIONS</h1>
                <div className="Teams_Tile_Container">
                    <div className="Teams_Inner_Row">
                        <div className="Teams_Tiles">
                            <Members.anshika_khare />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.prince_kumar_gond />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.jayant_roy />
                        </div>
                    </div>

                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.ritesh_sahu />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.aditya_ujjwal />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.kritika />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.anshuman_asauliya_PR />
                        </div>
                    </div>

                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.bhargavi_kiran />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.jayesh_upadhyay_PR />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.kumar_sourav />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.lahar_raghu />
                        </div>
                    </div>

                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.shubham_kumar />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.harsh_singh />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.piyush_kumar />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.avinash_singh />
                        </div>
                    </div>

                    <div className="Teams_Inner_Row1">
                        <div className="Teams_Tiles1">
                            <Members.megh_dokania />
                        </div>
                        <div className="Teams_Tiles1">
                            <Members.nitesh_dalmia />
                        </div>
                    </div>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.prince_kumar_gond />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.anshika_khare />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.jayant_roy />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.ritesh_sahu />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.aditya_ujjwal />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.kritika />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.anshuman_asauliya_PR />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.bhargavi_kiran />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.jayesh_upadhyay_PR />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.kumar_sourav />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.lahar_raghu />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.shubham_kumar />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.harsh_singh />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.piyush_kumar />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.avinash_singh />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.megh_dokania />
                    </div>
                    <div className="Teams_Tiles1">
                        <Members.nitesh_dalmia />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Public_Relations
