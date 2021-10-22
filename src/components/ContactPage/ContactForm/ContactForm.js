import React, { useState } from 'react'
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import isEmail from 'validator/lib/isEmail'
import isPhone from 'validator/lib/isMobilePhone'
import './ContactForm.css'

export const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [emailChanged, setEmailChanged] = useState(false)

    const [phone, setPhone] = useState('')
    const [isValidPhone, setIsValidPhone] = useState(false)
    const [phoneChanged, setPhoneChanged] = useState(false)

    const emailChangeHandler = (newEmail) => {
        setEmail(newEmail)
        if (newEmail === '') setEmailChanged(false)
        else setEmailChanged(true)
        setIsValidEmail(isEmail(newEmail))
    }

    const phoneChangeHandler = (newPhone) => {
        setPhone(newPhone)
        if (newPhone === '') setPhoneChanged(false)
        else setPhoneChanged(true)
        setIsValidPhone(isPhone(newPhone, 'en-IN'))
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
                            Please enter a valid email{' '}
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
                            value={phone}
                            valid={phoneChanged && isValidPhone}
                            invalid={phoneChanged && !isValidPhone}
                            onChange={(e) => {
                                phoneChangeHandler(e.target.value)
                            }}
                        />
                        <FormFeedback className="feedback">
                            {' '}
                            Please enter a valid Phone Number{' '}
                        </FormFeedback>
                        <FormFeedback
                            valid
                            style={{ display: 'none' }}
                            className="feedback"
                        ></FormFeedback>
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
