import React from "react"
import "./Sub_Files.css"
import {Route, Link} from "react-router-dom"
import Sample_Image from "./Mem_Images/Sample_Image.jpg"
import facebook_icon from "./Mem_Images/facebook_icon.png"
import insta_icon from "./Mem_Images/insta_icon.png"
import linkedin_icon from "./Mem_Images/linkedin_icon.png"


const Public_Relations = () => {
    return(

        <Route>

        <Link className = "back_button" to = "/team">
            Back
        </Link>
        
        <div className = "container_box">
        <h1 className = "title" >
            PUBLIC RELATIONS
        </h1>

        <div className = "row">
                
                <div className = "tile1">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/>

                    <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                    </div>
                    
                </div>

                <div className = "tile2">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/> 

                    <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                    </div>

                </div>

            </div>

            <div className = "row">
            
                <div className = "tile1">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/>

                    <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                    </div>

                </div>

                <div className = "tile2">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/> 

                    <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                    </div>

                </div>

            </div>

            <div className = "row">
            
                <div className = "tile1">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/>

                    <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                    </div>

                </div>

                <div className = "tile2">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/> 
                    
                    <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                    </div>

                </div>

            </div>

            <div className = "row">
            
                <div className = "tile1">
                    <img className = "photo" src = {Sample_Image} alt = "Hello World"/>
                        
                        <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                        </div>
                        
                </div>

                <div className = "tile2">
                <img className = "photo" src = {Sample_Image} alt = "Hello World"/>
                        
                        <div>
                        IIT BHU VARANASI
                        </div>
                        <div>
                        COORDINATOR
                        </div>

                        <div className = "social_icons">

                        <a href = "https://about.linkedin.com/">
                            <img src = {linkedin_icon} />
                        </a>

                        <a href = "https://www.facebook.com/">
                            <img src = {facebook_icon} />
                        </a>

                        <a href = "https://www.instagram.com/">
                            <img src = {insta_icon} />
                        </a>

                        </div>
                     
                </div>

            </div>
        
        </div>
        </Route>
        
    )
}

export default Public_Relations