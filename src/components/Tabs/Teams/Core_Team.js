import React, { useState } from 'react'
import './Sub_Files.css'
import { Route, Link } from 'react-router-dom'
import Carousel from 'react-simply-carousel'
import * as Members from './Members_Description_Tiles.js'
import Forward from './Icons/Front_Arrow.png'
import Backward from './Icons/Back_Arrow.png'

const Core_Team = () => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <Route>
            <div className="container_box" id="Teams_Scrollbar">
                <Link className="back_button" to="/team">
                    Back
                </Link>
                <h1 className="title">CORE TEAM</h1>
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
                    >
                        <div className="Teams_Tiles">
                            <Members.ritweek_singh />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.mohit_shringi />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.akshat_jain />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.pranav_mittal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.vikhyath_venkatraman />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.eshaan_gupta />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.smriti_sharma />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.siddharth_anand_srivastav />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.aditya_agarwal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.swastik_thapa />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.yash_jain />
                        </div>
                    </Carousel>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.swastik_thapa />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.mohit_shringi />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.akshat_jain />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.pranav_mittal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.vikhyath_venkatraman />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.eshaan_gupta />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.smriti_sharma />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.siddharth_anand_srivastav />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.aditya_agarwal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.swastik_thapa />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.yash_jain />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Core_Team
