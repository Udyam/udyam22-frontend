import React, { useState } from 'react'
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap'
import isEmail from 'validator/lib/isEmail'
import isPhone from 'validator/lib/isMobilePhone'
import './ContactForm.css'
import axios from 'axios'

export const ContactForm = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        contact: '',
        query: '',
    })

    const [validMessage, setValidMessage] = useState('')
    const [invalidMessage, setInvalidMessage] = useState('')
    const [validFields, setValidFields] = useState(false)

    const inputChangeHandler = (e) => {
        setValidMessage('')
        setInvalidMessage('')
        setInput((prevInput) => {
            const newInput = { ...prevInput }
            newInput[e.target.name] = e.target.value
            return newInput
        })
    }

    const validateFields = () => {
        if (input.name.trim() === '') {
            setInvalidMessage('Please fill out the Name field')
            setValidFields(false)
            return false
        } else if (input.email.trim() === '') {
            setInvalidMessage('Please fill out the Email field')
            setValidFields(false)
            return false
        } else if (!isEmail(input.email)) {
            setInvalidMessage('Please enter a valid email address')
            setValidFields(false)
            return false
        } else if (input.contact.trim() === '') {
            setInvalidMessage('Please fill out the Contact field')
            setValidFields(false)
            return false
        } else if (!isPhone(input.contact, 'en-IN')) {
            setInvalidMessage('Please enter a valid Contact No.')
            setValidFields(false)
            return false
        } else if (input.query.trim() === '') {
            setInvalidMessage('Please fill out the query field')
            setValidFields(false)
            return false
        } else return true
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (validateFields()) {
            axios
                .post(
                    'https://udyam22-backend.herokuapp.com/user/query/',
                    input
                )
                .then((res) => {
                    setValidMessage('Query Successfully received')
                    setValidFields(true)
                    console.log(res.data)
                    setInput({
                        name: '',
                        email: '',
                        contact: '',
                        query: '',
                    })
                })
                .catch((err) => {
                    setInvalidMessage(
                        'Oops, Something went wrong, Please try Again'
                    )
                    console.log(err)
                })
        }
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
                            value={input.name}
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            valid={input.name.trim() !== ''}
                            className="contact-form-fields"
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
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="tel"
                            name="contact"
                            placeholder="Contact-no"
                            className="contact-form-fields"
                            value={input.contact}
                            valid={
                                input.contact !== '' &&
                                isPhone(input.contact, 'en-IN')
                            }
                            invalid={
                                input.contact !== '' &&
                                !isPhone(input.contact, 'en-IN')
                            }
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="query"
                            value={input.query}
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            placeholder="Query"
                            className="contact-form-fields"
                            valid={input.query.trim() !== ''}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            style={{ display: 'none' }}
                            valid={validFields}
                            invalid={!validFields}
                        />
                        <FormFeedback className="contact-form-feedback">
                            {invalidMessage}
                        </FormFeedback>
                        <FormFeedback valid className="contact-form-feedback">
                            {validMessage}
                        </FormFeedback>
                    </FormGroup>
                    <div id="contact-form-button-wrapper">
                        <button
                            type="submit"
                            id="contact-form-button"
                            onClick={submitHandler}
                        >
                            {' '}
                            Submit{' '}
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
