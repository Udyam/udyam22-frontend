import React, { useState } from 'react'
import './Events.css'
// import { Temp } from './Temp'
import Carousel from 'react-simply-carousel'
import {
    Mosaic,
    Ichip,
    Spybits,
    Commnet,
    Xiota,
    Cassandra,
    Digisim,
    Funckit,
    Continuum,
} from './Events_Components.js'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Slider_Right from './Events_Images/Slider_Arrow_Right.png'

const Event = () => {
    const slider = (
        <div className="events_media_query">
            <AwesomeSlider
                organicArrows={true}
                bullets={true}
                mobileTouch={true}
                animation="cubeAnimation"
            >
                <div className="events_slider">
                    <Mosaic />
                </div>

                <div className="events_slider">
                    <Ichip />
                </div>

                <div className="events_slider">
                    <Spybits />
                </div>

                <div className="events_slider">
                    <Commnet />
                </div>

                <div className="events_slider">
                    <Xiota />
                </div>

                <div className="events_slider">
                    <Cassandra />
                </div>

                <div className="events_slider">
                    <Digisim />
                </div>

                <div className="events_slider">
                    <Funckit />
                </div>

                <div className="events_slider">
                    <Continuum />
                </div>
            </AwesomeSlider>
        </div>
    )

    const [activeSlide, setActiveSlide] = useState(0)

    function CheckBrowser() {
        if (navigator.userAgent.indexOf('Firefox') > -1) return 0
        return 1200
    }

    const changeHandler1 = () => {
        setActiveSlide(0)
    }

    const changeHandler2 = () => {
        setActiveSlide(1)
    }
    const changeHandler3 = () => {
        setActiveSlide(2)
    }
    const changeHandler4 = () => {
        setActiveSlide(3)
    }
    const changeHandler5 = () => {
        setActiveSlide(4)
    }
    const changeHandler6 = () => {
        setActiveSlide(5)
    }
    const changeHandler7 = () => {
        setActiveSlide(6)
    }
    const changeHandler8 = () => {
        setActiveSlide(7)
    }
    const changeHandler9 = () => {
        setActiveSlide(8)
    }
    return (
        <>
            <h1 className="Events_head">EVENTS</h1>

            {slider}

            <div className="Events_CSS_Container">
                <div className="Event_panel_Left">
                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler1}
                        style={{
                            textDecorationLine:
                                activeSlide === 0 ? 'underline' : 'none',
                            fontSize: activeSlide === 0 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 0
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        XIOTA
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler2}
                        style={{
                            textDecorationLine:
                                activeSlide === 1 ? 'underline' : 'none',
                            fontSize: activeSlide === 1 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 1
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        CONTINUUM
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler3}
                        style={{
                            textDecorationLine:
                                activeSlide === 2 ? 'underline' : 'none',
                            fontSize: activeSlide === 2 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 2
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        DIGISIM
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler4}
                        style={{
                            textDecorationLine:
                                activeSlide === 3 ? 'underline' : 'none',
                            fontSize: activeSlide === 3 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 3
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        COMMNET
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler5}
                        style={{
                            textDecorationLine:
                                activeSlide === 4 ? 'underline' : 'none',
                            fontSize: activeSlide === 4 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 4
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        ICHIP
                    </div>
                </div>

                <div className="Events-Desktop_Carousel">
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
                                // marginTop: '3.5vh',
                                // marginRight: '2vw',
                                // marginLeft: '2vw',
                                height: '100%',
                                width: '100%',
                                justifyContent: 'space-between',
                            },
                        }}
                        activeSlideIndex={activeSlide}
                        activeSlideProps={{
                            className: 'EventsActiveSlider',
                        }}
                        onRequestChange={setActiveSlide}
                        forwardBtnProps={{
                            children: (
                                <img
                                    src={Slider_Right}
                                    style={{
                                        width: 'auto',
                                        height: '70%',
                                        marginLeft: '12%',
                                        marginBottom: '9%',
                                        transform: 'scaleX(-1)',
                                    }}
                                ></img>
                            ),
                            style: {
                                width: '2vw',
                                height: '2vw',
                                // minWidth: 60,
                                alignSelf: 'center',
                                border: 'none',
                                borderRadius: '50%',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(144, 224, 239,1)',
                            },
                        }}
                        backwardBtnProps={{
                            children: (
                                <img
                                    src={Slider_Right}
                                    style={{
                                        width: 'auto',
                                        height: '70%',
                                        marginRight: '12%',
                                        marginBottom: '9%',
                                    }}
                                ></img>
                            ),
                            style: {
                                width: '2vw',
                                height: '2vw',
                                // minWidth: 60,
                                alignSelf: 'center',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(144, 224, 239,1)',
                            },
                        }}
                        itemsToShow={2}
                        speed={CheckBrowser()}
                        delay={-600}
                        easing={'ease-in-out'}
                    >
                        <div className="Event_Carousel_Tiles">
                            <Xiota />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Continuum />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Digisim />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Commnet />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Ichip />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Mosaic />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Cassandra />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Spybits />
                        </div>

                        <div className="Event_Carousel_Tiles">
                            <Funckit />
                        </div>
                    </Carousel>
                </div>

                <div className="Event_panel_Right">
                    <div
                        className="Events_Outer_Link_Right"
                        onClick={changeHandler6}
                        style={{
                            textDecorationLine:
                                activeSlide === 5 ? 'underline' : 'none',
                            fontSize: activeSlide === 5 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 5
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        MOSAIC
                    </div>

                    <div
                        className="Events_Outer_Link_Right"
                        onClick={changeHandler7}
                        style={{
                            textDecorationLine:
                                activeSlide === 6 ? 'underline' : 'none',
                            fontSize: activeSlide === 6 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 6
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        CASSANDRA
                    </div>

                    <div
                        className="Events_Outer_Link_Right"
                        onClick={changeHandler8}
                        style={{
                            textDecorationLine:
                                activeSlide === 7 ? 'underline' : 'none',
                            fontSize: activeSlide === 7 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 7
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        SPYBITS
                    </div>

                    <div
                        className="Events_Outer_Link_Right"
                        onClick={changeHandler9}
                        style={{
                            textDecorationLine:
                                activeSlide === 8 ? 'underline' : 'none',
                            fontSize: activeSlide === 8 ? '1.9rem' : '1.8rem',
                            color:
                                activeSlide === 8
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        FUNCKIT
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
