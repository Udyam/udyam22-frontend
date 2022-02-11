import React, { useState } from 'react'
import './Sub_Files.css'
import Carousel from 'react-simply-carousel'
import { Route, Link } from 'react-router-dom'
import * as Members from './Members_Description_Tiles.js'
import Forward from './Icons/Front_Arrow.png'
import Backward from './Icons/Back_Arrow.png'

const Public_Relations = () => {
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
                <h1 className="title">PUBLIC RELATIONS</h1>
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
                            <Members.prince_kumar_gond />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.anshika_khare />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.ritesh_sahu />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.aditya_ujjwal />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.kritika />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.anshuman_asauliya_PR />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.bhargavi_kiran />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.jayesh_upadhyay_PR />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.kumar_sourav />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.lahar_raghu />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.shubham_kumar />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.harsh_singh />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.piyush_kumar />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.avinash_singh />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.megh_dokania />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.nitesh_dalmia />
                        </div>
                        <div className="Teams_Tiles">
                            <Members.jayant_roy />
                        </div>
                    </Carousel>
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
                    <div className="Teams_Tiles">
                        <Members.ritesh_sahu />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.aditya_ujjwal />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.kritika />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.anshuman_asauliya_PR />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.bhargavi_kiran />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.jayesh_upadhyay_PR />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.kumar_sourav />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.lahar_raghu />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.shubham_kumar />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.harsh_singh />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.piyush_kumar />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.avinash_singh />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.megh_dokania />
                    </div>
                    <div className="Teams_Tiles">
                        <Members.nitesh_dalmia />
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default Public_Relations
