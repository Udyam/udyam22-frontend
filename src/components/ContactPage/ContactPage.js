import React from 'react'
import './ContactPage.css'
import { ContactForm } from './ContactForm/ContactForm'
import { InfoBox } from './InfoBox/InfoBox'

export const ContactPage = () => {
    return (
        <div id="contact-page-container">
            <div id="contact-form">
                <ContactForm> </ContactForm>
            </div>
            <div id="info-box">
                <InfoBox></InfoBox>
            </div>
        </div>
    )
}
