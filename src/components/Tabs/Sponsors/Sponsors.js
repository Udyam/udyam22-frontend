import React from 'react'
import './Sponsors.css'
import nvidia from './Sponsors_Images_Folder/NVIDIA.jpeg'
import arm from './Sponsors_Images_Folder/ARM.jpeg'
import cisco from './Sponsors_Images_Folder/CISCO.jpeg'
import mentor_graphics from './Sponsors_Images_Folder/MENTOR_GRAPHICS.jpeg'

const Sponsors = () => {
    return (
        <div className="sponsors">
            <h1 className="Sponsors_head">SPONSORS</h1>

            <div className="container-sponsors" id="Sponsors_Scrollbar">
                {/* <div className="row-1">
                    <div className="title1">
                        <h4>TITLE SPONSOR :</h4>
                        <div className="box" style = {{marginRight: "0%"}}></div>
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
                </div> */}
                <div className="row-2">
                    <div className="subheading">
                        <h4>PREVIOUS SPONSORS :</h4>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={cisco} className="sponsors_image_box" />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={mentor_graphics}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={nvidia} className="sponsors_image_box" />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={arm} className="sponsors_image_box" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
