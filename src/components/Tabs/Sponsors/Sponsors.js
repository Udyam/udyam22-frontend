import React from 'react'
import './Sponsors.css'
import Coin_Kuber from './Sponsors_Images_Folder/Coin_Kuber.jpg'
import Aptron from './Sponsors_Images_Folder/Aptron.png'
import Cisco from './Sponsors_Images_Folder/Cisco.png'
import Silence_Labs from './Sponsors_Images_Folder/Silence_Labs.png'
import Mentor from './Sponsors_Images_Folder/Mentor.jpg'
import Intec_Info from './Sponsors_Images_Folder/Intec_Info.jfif'
import Teeshood from './Sponsors_Images_Folder/Teeshood.png'
import Cisco_Thing from './Sponsors_Images_Folder/Cisco_Thing.png'
import CodeChef from './Sponsors_Images_Folder/CodeChef.jpg'
import Persistent from './Sponsors_Images_Folder/Persistent.jfif'
import Nvidia from './Sponsors_Images_Folder/Nvidia.png'
import silverpush from './Sponsors_Images_Folder/silverpush.png'
import Appwars from './Sponsors_Images_Folder/Appwars.jfif'
import Rapid_Ai from './Sponsors_Images_Folder/Rapid_Ai.jpg'

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
                        <h4>PREVIOUS TITLE SPONSORS :</h4>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Coin_Kuber}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={Aptron} className="sponsors_image_box" />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={Cisco} className="sponsors_image_box" />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Silence_Labs}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={Mentor} className="sponsors_image_box" />
                        </div>
                    </div>
                </div>

                <div className="row-2">
                    <div className="subheading">
                        <h4>PREVIOUS CO-TITLE SPONSORS :</h4>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Intec_Info}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Teeshood}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Cisco_Thing}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={Aptron} className="sponsors_image_box" />
                        </div>
                    </div>
                </div>

                <div className="row-2">
                    <div className="subheading">
                        <h4>PREVIOUS EVENT SPONSORS :</h4>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={CodeChef}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={Nvidia} className="sponsors_image_box" />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={silverpush}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Silence_Labs}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Persistent}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img src={Appwars} className="sponsors_image_box" />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Cisco_Thing}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                    <div className="title2">
                        <div className="box">
                            <img
                                src={Rapid_Ai}
                                className="sponsors_image_box"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
