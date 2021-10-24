import React, { useState } from 'react'
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import isEmail from 'validator/lib/isEmail'
import isPhone from 'validator/lib/isMobilePhone'
import './ContactForm.css'

export const ContactForm = () => {
    const [input, setInput] = useState({
        email: '',
        phone: '',
    })

    const inputChangeHandler = (e) => {
        const newInput = { ...input }
        newInput[e.target.name] = e.target.value
        setInput(newInput)
    }

    return (
        <div id="contact-form-wrapper">
            <div id="contact-form-container">
                <h1 id="contact-form-head"> Contact us </h1>
                <Form id="main-contact-form">
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="contact-form-fields"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={input.email}
                            valid={input.email !== '' && isEmail(input.email)}
                            invalid={
                                input.email !== '' && !isEmail(input.email)
                            }
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            className="contact-form-fields"
                            required
                        />
                        <FormFeedback className="contact-form-feedback">
                            {' '}
                            Please enter a valid email{' '}
                        </FormFeedback>
                        <FormFeedback
                            valid
                            style={{ display: 'none' }}
                            className="contact-form-feedback"
                        ></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Contact-no"
                            className="contact-form-fields"
                            value={input.phone}
                            valid={
                                input.phone !== '' &&
                                isPhone(input.phone, 'en-IN')
                            }
                            invalid={
                                input.phone !== '' &&
                                !isPhone(input.phone, 'en-IN')
                            }
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            required
                        />
                        <FormFeedback className="contact-form-feedback">
                            {' '}
                            Please enter a valid Phone Number{' '}
                        </FormFeedback>
                        <FormFeedback
                            valid
                            style={{ display: 'none' }}
                            className="contact-form-feedback"
                        ></FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="query"
                            placeholder="Query"
                            className="contact-form-fields"
                            required
                        />
                    </FormGroup>
                    <div id="contact-form-button-wrapper">
                        <button type="submit" id="contact-form-button">
                            {' '}
                            Submit{' '}
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
