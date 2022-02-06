import React, { useState } from 'react'
import './Sub_Files.css'
import Carousel from 'react-simply-carousel'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'
import Forward from './Icons/Front_Arrow.png'
import Backward from './Icons/Back_Arrow.png'

const Designers = () => {
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
                <h1 className="title">DESIGNERS</h1>
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
                        itemsToShow={2}
                        speed={CheckBrowser()}
                    >
                        <div className="Teams_Tiles">
                            <Members.siddharth_anand_srivastav_head />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.raj_aryan_srivastava />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.pratik_mishra />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.devi_tanuja_vasamsetty />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.shivansh_dubey />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.vislavath_swetha />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.manoj_gupta />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.kalpit_adhao />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.archit_soni />
                        </div>
                    </Carousel>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.siddharth_anand_srivastav_head />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.raj_aryan_srivastava />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.pratik_mishra />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.devi_tanuja_vasamsetty />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.shivansh_dubey />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.vislavath_swetha />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.manoj_gupta />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.kalpit_adhao />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.archit_soni />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Designers
