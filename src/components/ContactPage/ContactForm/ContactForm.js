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
                <h1> Contact us </h1>
                <Form id="form">
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="fields"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            value={input.email}
                            valid={input.email !== '' && isEmail(input.email)}
                            invalid={
                                input.email !== '' && !isEmail(input.email)
                            }
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            className="fields"
                            required
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
                            name="phone"
                            id="phone"
                            placeholder="Contact-no"
                            className="fields"
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
                            required
                        />
                    </FormGroup>
                    <div id="button-wrapper">
                        <button type="submit"> Submit </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
