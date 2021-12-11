import React from "react"
import "./Events.css"
import events from "./Events.png"
import { useState } from "react"
import { Temp } from "./Temp"
import { Mosaic, Ichip, Spybits, Commnet, Xiota, Cassandra, Digisim, Funckit, Continuum } from "./Events_Components.js"

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 


const Event = () => {

    const slider = (
        <div className = "events_media_query">
        <AwesomeSlider animation = "cubeAnimation">
            <div>
                <Mosaic />
            </div>

                <div>
                    <Ichip />
                </div>

                <div>
                    <Spybits />
                </div>

                <div>
                    <Commnet />
                </div>

                <div>
                    <Xiota />
                </div>

                <div>
                    <Cassandra />
                </div>

                <div>
                    <Digisim />
                </div>

                <div>
                    <Funckit />
                </div>

                <div>
                    <Continuum />
                </div>
          
        </AwesomeSlider>
        </div>
      );
        
        const [caller_number,setcaller_number] = useState("1")
    
        const changeHandler1 = () => 
        {
            setcaller_number("1")
        }

        const changeHandler2 = () => 
        {
            setcaller_number("2")
        }

        const changeHandler3 = () => 
        {
            setcaller_number("3")
        }

        const changeHandler4 = () => 
        {
            setcaller_number("4")
        }

        const changeHandler5 = () => 
        {
            setcaller_number("5")
        }

        const changeHandler6 = () => 
        {
            setcaller_number("6")
        }

        const changeHandler7 = () => 
        {
            setcaller_number("7")
        }

        const changeHandler8 = () => 
        {
            setcaller_number("8")
        }

        const changeHandler9 = () => 
        {
            setcaller_number("9")
        }
   
    return (

    <>

            <div className="header">
            <img src={events} alt="Events" />
            </div>

            {slider}

        <div className = "Events_CSS_Container">

             <div className = "Main_box_Events">
                <Temp data = {caller_number}/>
             </div>


            
                <div className = "Event_panel">

                    <div className = "Events_Outer_Link" onClick = {changeHandler1}>
                        Mosaic
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler2}>
                        I-chip
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler3}>
                        Spybits
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler4}>
                        Commnet
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler5}>
                        Xiota
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler6}>
                        Cassandra
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler7}>
                        Digisim
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler8}>
                        Funckit
                    </div>

                    <div className = "Events_Outer_Link" onClick = {changeHandler9}>
                        Continuum
                    </div>
                    
                </div>

        </div>

    </>

    )
}

export default Event


