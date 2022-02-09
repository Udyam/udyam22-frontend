import React, { useState } from 'react'
import './Sub_Files.css'
import Carousel from 'react-simply-carousel'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'
import Forward from './Icons/Front_Arrow.png'
import Backward from './Icons/Back_Arrow.png'

const Marketing_Team = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    function CheckBrowser() {
        if (navigator.userAgent.indexOf('Firefox') > -1) return 0
        return 500
    }

    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">MARKETING TEAM</h1>
                <div className="Teams_Carousel_Container">
                    <Carousel
                        disableNavIfAllVisible={false}
                        disableNavIfEdgeVisible={false}
                        disableNavIfEdgeActive={false}
                        hideNavIfAllVisible={false}
                        centerMode
                        updateOnItemClick
                        itemsListProps={{
                            style: {
                                marginRight: '0vw',
                            },
                        }}
                        containerProps={{
                            style: {
                                marginTop: '3.5vh',
                                marginRight: '2vw',
                                marginLeft: '2vw',
                                height: '100%',
                                justifyContent: 'space-between',
                            },
                        }}
                        activeSlideIndex={activeSlide}
                        activeSlideProps={{
                            className: 'ActiveSlider',
                        }}
                        onRequestChange={setActiveSlide}
                        forwardBtnProps={{
                            children: (
                                <img src={Forward} className="Icons_Arrows" />
                            ),
                            style: {
                                width: '3.5vw',
                                height: '7vh',
                                minWidth: 60,
                                alignSelf: 'center',
                                border: 'none',
                                borderRadius: '50%',
                            },
                        }}
                        backwardBtnProps={{
                            children: (
                                <img src={Backward} className="Icons_Arrows" />
                            ),
                            style: {
                                width: '3.5vw',
                                height: '7vh',
                                minWidth: 60,
                                alignSelf: 'center',
                                border: 'none',
                                borderRadius: '50%',
                            },
                        }}
                        itemsToShow={3}
                        speed={CheckBrowser()}
                    >
                        <div className="Teams_Tiles">
                            <Members.prajakta_priyadarsini_head />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.somesh_dey />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.nikhil_singh />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.vikrant />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.riya_kanojiya_marketing />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.yashank_aggarwal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.korivi_vedharshini />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.pratishtha_dhiraj />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.nishtanth_gounder />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.priya_meena />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.nelson_rahul_tigga />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.deependra_singh />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.anurup_krishna />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.mohit_kumar_sharma />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.pushpam_berlia />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.srini_rohan />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.shubham_gond />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.op_nisad />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.suhani_agrawal_marketing />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.varsha_jangir />
                        </div>
                    </Carousel>
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
                    <div className="Teams_Tiles">
                        <Members.nikhil_singh />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.vikrant />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.riya_kanojiya_marketing />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.yashank_aggarwal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.korivi_vedharshini />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.pratishtha_dhiraj />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.nishtanth_gounder />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.priya_meena />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.nelson_rahul_tigga />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.deependra_singh />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.anurup_krishna />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.mohit_kumar_sharma />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.pushpam_berlia />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.srini_rohan />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Marketing_Team
