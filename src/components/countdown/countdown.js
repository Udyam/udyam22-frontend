import React from 'react'
import bckgrnd from './bckgrnd.png'
import './countdown.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useEffect, useState } from 'react'

import _ from 'lodash'

function Separator(props) {
    return (
        <div
            style={{
                position: 'absolute',
                height: '100%',
                transform: `rotate(${props.turns}turn)`,
            }}
        >
            <div style={props.style} />
        </div>
    )
}

function RadialSeparators(props) {
    const turns = 1 / props.count
    return _.range(props.count).map((index) => (
        <Separator key={index} turns={index * turns} style={props.style} />
    ))
}

const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime()

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [countDownDate])

    return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
    var days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((countDown % (1000 * 60)) / 1000)
    if (seconds < 10) seconds = '0' + seconds
    if (minutes < 10) minutes = '0' + minutes
    if (hours < 10) hours = '0' + hours
    if (days < 10) days = '0' + days
    return [days, hours, minutes, seconds]
}

function countdown() {
    var targetDate = new Date('Apr 5, 2022 00:00:00').getTime()
    let [d, h, m, s] = useCountdown(targetDate)
    return (
        <div
            style={{
                overflowX: 'hidden',
                overflowY: 'hidden',
                marginTop: '200px',
                height: '320px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}
            >
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbarWithChildren
                        value={(d / 30) * 100}
                        strokeWidth={7}
                        background={true}
                        backgroundPadding={0}
                        styles={{
                            path: {
                                stroke: `#86E5F6`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 1s ease 0s',
                                transform: 'rotate(0turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'transparent',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            background: {
                                fill: '#00224f',
                                height: '40px',
                                width: '40px',
                            },
                        }}
                    >
                        <RadialSeparators
                            count={70}
                            style={{
                                background: 'rgb(220,220,220,44%)',
                                width: '4px',
                                // This needs to be equal to props.strokeWidth
                                height: `${7}%`,
                            }}
                        />
                        <img className="blueimg" src={bckgrnd} />
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbarWithChildren
                        value={(h / 24) * 100}
                        strokeWidth={7}
                        background={true}
                        backgroundPadding={0}
                        styles={{
                            path: {
                                stroke: `#86E5F6`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 1s ease 0s',
                                transform: 'rotate(0turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'transparent',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            background: {
                                fill: '#00224f',
                                height: '40px',
                                width: '40px',
                            },
                        }}
                    >
                        <RadialSeparators
                            count={70}
                            style={{
                                background: 'rgb(220,220,220,44%)',
                                width: '4px',
                                // This needs to be equal to props.strokeWidth
                                height: `${7}%`,
                            }}
                        />
                        <img className="blueimg" src={bckgrnd} />
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbarWithChildren
                        value={(m / 60) * 100}
                        strokeWidth={7}
                        background={true}
                        backgroundPadding={0}
                        styles={{
                            path: {
                                stroke: `#86E5F6`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 1s ease 0s',
                                transform: 'rotate(0turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'transparent',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            background: {
                                fill: '#00224f',
                                height: '40px',
                                width: '40px',
                            },
                        }}
                    >
                        <RadialSeparators
                            count={70}
                            style={{
                                background: 'rgb(220,220,220,44%)',
                                width: '4px',
                                // This needs to be equal to props.strokeWidth
                                height: `${7}%`,
                            }}
                        />
                        <img className="blueimg" src={bckgrnd} />
                    </CircularProgressbarWithChildren>
                </div>
                <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbarWithChildren
                        value={(s / 60) * 100}
                        strokeWidth={7}
                        background={true}
                        backgroundPadding={0}
                        styles={{
                            path: {
                                stroke: `#86E5F6`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 1s ease 0s',
                                transform: 'rotate(0turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'transparent',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            background: {
                                fill: '#00224f',
                                height: '40px',
                                width: '40px',
                            },
                        }}
                    >
                        <RadialSeparators
                            count={70}
                            style={{
                                background: 'rgb(220,220,220,44%)',
                                width: '4px',
                                // This needs to be equal to props.strokeWidth
                                height: `${7}%`,
                            }}
                        />
                        <img className="blueimg" src={bckgrnd} />
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <p className="valuess">{s}</p>
            <p className="valuesm">{m}</p>
            <p className="valuesh">{h}</p>
            <p className="valuesd">{d}</p>
            <p className="valuesse">seconds</p>
            <p className="valuesme">minutes</p>
            <p className="valueshe">hours</p>
            <p className="valuesde">days</p>
        </div>
    )
}
export default countdown
