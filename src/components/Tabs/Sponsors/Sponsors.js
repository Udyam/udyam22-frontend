import React from 'react'
import './Sponsors.css'
import sponsors_head from './Sponsors_head.png'

const Sponsors = () => {
    return (
        <div className="sponsors">
            <div className="heading">
                <img
                    className="Sponsors_head"
                    src={sponsors_head}
                    alt="Sponsors_heading"
                />
            </div>

            <div className="container-sponsors" id="Sponsors_Scrollbar">
                <div className="row-1">
                    <div className="title1">
                        <h4>TITLE SPONSOR :</h4>
                        <div className="box"></div>
                    </div>
                    <div className="title1">
                        <h4>PLATFORM SPONSOR :</h4>
                        <div className="box"></div>
                    </div>
                </div>
                <div className="row-2">
                    <div className="subheading">
                        <h4>EVENT SPONSOR :</h4>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                </div>
                <div className="row-2">
                    <div className="subheading">
                        <h4>PREVIOUS SPONSORS :</h4>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                    <div className="title2">
                        <div className="box"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
