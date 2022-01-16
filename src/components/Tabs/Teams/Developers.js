import React, { useState } from 'react'
import './Sub_Files.css'
import Carousel from 'react-simply-carousel'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'
import Forward from './Icons/Front_Arrow.png'
import Backward from './Icons/Back_Arrow.png'

const Developers = () => {
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
                <h1 className="title">DEVELOPERS</h1>
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
                            <Members.yash_jain />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ayush_gangwani />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.atharva_bhatt />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.sarang_manerikar />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.prashasti_tripathi />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ankur_agrawal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.raina_jain />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ayushi_gupta />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.sanskar_santosh_totla />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.sanidhya_taparia />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.anshuman_asauliya />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.mayank_singh />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.jayesh_upadhyay />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.suhani_agrawal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.riya_kanojiya />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ayush_bemera />
                        </div>
                    </Carousel>
                </div>
                <div className="Teams_Mobile_Container">
                    <div className="Teams_Tiles">
                        <Members.yash_jain />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.ayush_gangwani />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.atharva_bhatt />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.sarang_manerikar />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.prashasti_tripathi />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.ankur_agrawal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.raina_jain />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.ayushi_gupta />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.sanskar_santosh_totla />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.sanidhya_taparia />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.anshuman_asauliya />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.mayank_singh />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.jayesh_upadhyay />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.suhani_agrawal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.riya_kanojiya />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.ayush_bemera />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Developers
