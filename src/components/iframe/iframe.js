import React from 'react'
import './iframe.css'
const IframeComponent = () => {
    return (
        <div className="iframe-container">
            <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/sx0YFhFBzrw"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="500"
                height="300"
            ></iframe>
        </div>
    )
}
export default IframeComponent
