import React, { useState } from 'react'
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import './ContactForm.css'

export const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [emailChanged, setEmailChanged] = useState(false)

    const emailChangeHandler = (newEmail) => {
        setEmail(newEmail)
        if (newEmail === '') setEmailChanged(false)
        else setEmailChanged(true)
        setIsValidEmail(false) /*process API req here to check email*/
    }

    return (
        <div id="contact-form-wrapper">
            <div id="contact-form-container">
                <h1> Contact us </h1>
                <Form id="form">
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="fields"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            value={email}
                            valid={emailChanged && isValidEmail}
                            invalid={!isValidEmail && emailChanged}
                            onChange={(e) => {
                                emailChangeHandler(e.target.value)
                            }}
                            className="fields"
                        />
                        <FormFeedback className="feedback">
                            {' '}
                            Email either invalid or not registered{' '}
                        </FormFeedback>
                        <FormFeedback
                            valid
                            style={{ display: 'none' }}
                            className="feedback"
                        ></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="tel"
                            name="contact-no"
                            id="contact-no"
                            placeholder="Contact-no"
                            className="fields"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="query"
                            id="query"
                            placeholder="Query"
                            className="fields"
                            overfl
                        />
                    </FormGroup>
                </Form>
                <div id="button-wrapper">
                    <button type="submit"> Submit </button>
                </div>
            </div>
        </div>
    )
}
