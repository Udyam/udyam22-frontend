import React from 'react'
import './Events.css'
import { useState } from 'react'
import { Temp } from './Temp'
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

const Event = () => {
    const slider = (
        <div className="events_media_query">
            <AwesomeSlider animation="cubeAnimation">
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

    const [caller_number, setcaller_number] = useState('1')

    const changeHandler1 = () => {
        setcaller_number('1')
    }

    const changeHandler2 = () => {
        setcaller_number('2')
    }

    const changeHandler3 = () => {
        setcaller_number('3')
    }

    const changeHandler4 = () => {
        setcaller_number('4')
    }

    const changeHandler5 = () => {
        setcaller_number('5')
    }

    const changeHandler6 = () => {
        setcaller_number('6')
    }

    const changeHandler7 = () => {
        setcaller_number('7')
    }

    const changeHandler8 = () => {
        setcaller_number('8')
    }

    const changeHandler9 = () => {
        setcaller_number('9')
    }

    return (
        <>
            <h1 className="Events_head">EVENTS</h1>

            {slider}

            <div className="Events_CSS_Container">
                <div className="Main_box_Events">
                    <Temp data={caller_number} />
                </div>

                <div className="Event_panel">
                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler1}
                        style={{
                            textDecorationLine:
                                caller_number === '1' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '1' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '1'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Mosaic
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler2}
                        style={{
                            textDecorationLine:
                                caller_number === '2' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '2' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '2'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        I-chip
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler3}
                        style={{
                            textDecorationLine:
                                caller_number === '3' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '3' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '3'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Spybits
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler4}
                        style={{
                            textDecorationLine:
                                caller_number === '4' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '4' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '4'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Commnet
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler5}
                        style={{
                            textDecorationLine:
                                caller_number === '5' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '5' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '5'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Xiota
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler6}
                        style={{
                            textDecorationLine:
                                caller_number === '6' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '6' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '6'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Cassandra
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler7}
                        style={{
                            textDecorationLine:
                                caller_number === '7' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '7' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '7'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Digisim
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler8}
                        style={{
                            textDecorationLine:
                                caller_number === '8' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '8' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '8'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Funckit
                    </div>

                    <div
                        className="Events_Outer_Link"
                        onClick={changeHandler9}
                        style={{
                            textDecorationLine:
                                caller_number === '9' ? 'underline' : 'none',
                            fontSize:
                                caller_number === '9' ? '1.9rem' : '1.8rem',
                            color:
                                caller_number === '9'
                                    ? '#90E0EF'
                                    : 'rgba(144,244,239,0.7)',
                        }}
                    >
                        Continuum
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
