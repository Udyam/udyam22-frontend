import React from 'react'
import { Form, FormGroup, FormFeedback, Input } from 'reactstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import isEmail from 'validator/lib/isEmail'
import './Register.css'
// import axios from 'axios'

//api

const API_BASE_URL = 'https://udyam22-backend.herokuapp.com'

const Register = () => {
    const [input, setInput] = useState({
        teamname: '',
        event: '',
        leader: '',
        member1: '',
        member2: '',
    })
    const [numMembers, setNumMembers] = useState('Members')
    const [check, setCheck] = useState(0)

    const [firstmember, setFirstmember] = useState(false)
    const [secondmember, setSecondmember] = useState(false)
    const [thirdmember, setThirdmember] = useState(false)

    const inputChangeHandler = async (e) => {
        // console.log("e in form", e.target.value);
        const newInput = { ...input }
        newInput[e.target.name] = e.target.value
        setInput(newInput)
        // console.log("event=",input.event);
    }

    const memberChangeHandler = async (e) => {
        // console.log("e in form", e.target.value);
        setNumMembers(e.target.value)
        showDropdown(e.target.value)
        // console.log("numMembers=",numMembers);
    }

    const showDropdown = (num) => {
        if (num === '1') {
            setFirstmember(true)
            setSecondmember(false)
            setThirdmember(false)
        } else if (num === '2') {
            setFirstmember(true)
            setSecondmember(true)
            setThirdmember(false)
        } else if (num === '3') {
            setFirstmember(true)
            setSecondmember(true)
            setThirdmember(true)
        }
    }

    // function submitHandler(e) {
    //     console.log("e",e);
    useEffect(() => {
        if (check) {
            console.log('check=', check)
            console.log('input=', input)

            // if number of members is 1 dlete member1 and member2 from input
            if (numMembers === '1') {
                delete input.member1
                delete input.member2
            }
            // if number of members is 2 delete member2 from input
            else if (numMembers === '2') {
                delete input.member2
            }

            console.log('input new=', input)

            axios
                .post(API_BASE_URL + '/API/team/create/', input, {
                    headers: {
                        Authorization:
                            'Token d102f9b8531448411f3658ecfdeeee5b0fbf2a17',
                    },
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [check])
    // }

    return (
        <div className="registerContainer">
            {/* <div className="registerForm"> */}
            {/* <h1>Form</h1> */}

            <div className="registerForm">
                {/* <h1 id="contact-form-head"> Contact us </h1> */}

                <Form className="form">
                    {/* <FormSelect aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </FormSelect> */}

                    {/* <FormGroup>
                                <i className="fas fa-graduation-cap"></i>
                            </FormGroup> */}

                    {/* <FormGroup style={{width: '100%'}}>

                                <Dropdown className="dropdown" isOpen="true">
                                    <DropdownToggle className="toggle" caret>
                                        EVENT
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>MOSAIC</DropdownItem>
                                        <DropdownItem>SPYBITS</DropdownItem>
                                        <DropdownItem>I-CHIP</DropdownItem>
                                        <DropdownItem>COMMNET</DropdownItem>
                                        <DropdownItem>CONTINNUM</DropdownItem>
                                        <DropdownItem>DIGISM</DropdownItem>
                                        <DropdownItem>XIOTA</DropdownItem>
                                        <DropdownItem>CASSANDRA</DropdownItem>
                                        <DropdownItem>FUNCKIT</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup> */}

                    <FormGroup>
                        {/* <Input type="select" name="select" id="exampleSelect" placeholder="EVENT"> */}
                        <select
                            name="event"
                            value={input.event}
                            onChange={(e) => {
                                inputChangeHandler(e)
                                console.log('event e=', input.event)
                            }}
                            id="id_event"
                            className="dropdown"
                        >
                            <option value="EVENT">EVENT</option>
                            <option value="MOSAIC">MOSAIC</option>
                            <option value="SPYBITS">SPYBITS</option>
                            <option value="I-CHIP">I-CHIP</option>
                            <option value="COMMNET">COMMNET</option>
                            <option value="CONTINNUM">CONTINNUM</option>
                            <option value="DIGISM">DIGISM</option>
                            <option value="XIOTA">XIOTA</option>
                            <option value="CASSANDRA">CASSANDRA</option>
                            <option value="FUNCKIT">FUNCKIT</option>
                        </select>
                        {/* </Input> */}
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type="text"
                            name="teamname"
                            placeholder="TEAM NAME"
                            value={input.teamname}
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            className="team"
                            required
                        />
                    </FormGroup>

                    {/* <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                </Input>
                            </FormGroup> */}

                    <FormGroup>
                        {/* <Input type="select" name="select" id="exampleSelect" placeholder="EVENT"> */}
                        <select
                            name="members"
                            id="id_event"
                            className="dropdown"
                            value={numMembers}
                            onChange={(e) => {
                                memberChangeHandler(e)
                            }}
                        >
                            <option value="Members">MEMBERS</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        {/* </Input> */}
                    </FormGroup>

                    {firstmember && (
                        <FormGroup>
                            <Input
                                type="email"
                                name="leader"
                                value={input.leader}
                                valid={
                                    input.leader !== '' && isEmail(input.leader)
                                }
                                invalid={
                                    input.leader !== '' &&
                                    !isEmail(input.leader)
                                }
                                onChange={(e) => {
                                    inputChangeHandler(e)
                                }}
                                placeholder="TEAM LEADER"
                                className="team"
                                required
                            />

                            <FormFeedback className="contact-form-feedback">
                                {' '}
                                Please enter a valid Leader email{' '}
                            </FormFeedback>
                            <FormFeedback
                                valid
                                style={{ display: 'none' }}
                                className="contact-form-feedback"
                            ></FormFeedback>
                        </FormGroup>
                    )}

                    {secondmember && (
                        <FormGroup>
                            <Input
                                type="email"
                                name="member1"
                                value={input.member1}
                                valid={
                                    input.member1 !== '' &&
                                    isEmail(input.member1)
                                }
                                invalid={
                                    input.member1 !== '' &&
                                    !isEmail(input.member1)
                                }
                                onChange={(e) => {
                                    inputChangeHandler(e)
                                }}
                                placeholder="MEMBER 1"
                                className="team"
                            />

                            <FormFeedback className="contact-form-feedback">
                                {' '}
                                Please enter a valid Member 1 email{' '}
                            </FormFeedback>
                            <FormFeedback
                                valid
                                style={{ display: 'none' }}
                                className="contact-form-feedback"
                            ></FormFeedback>
                        </FormGroup>
                    )}

                    {thirdmember && (
                        <FormGroup>
                            <Input
                                type="email"
                                name="member2"
                                value={input.member2}
                                valid={
                                    input.member2 !== '' &&
                                    isEmail(input.member2)
                                }
                                invalid={
                                    input.member2 !== '' &&
                                    !isEmail(input.member2)
                                }
                                onChange={(e) => {
                                    inputChangeHandler(e)
                                }}
                                placeholder="MEMBER 2"
                                className="team"
                            />

                            <FormFeedback className="contact-form-feedback">
                                {' '}
                                Please enter a valid Member 2 email{' '}
                            </FormFeedback>
                            <FormFeedback
                                valid
                                style={{ display: 'none' }}
                                className="contact-form-feedback"
                            ></FormFeedback>
                        </FormGroup>
                    )}
                </Form>
            </div>

            <div className="buttonContainer">
                <button
                    className="button"
                    onClick={() => {
                        console.log('button clicked')
                        setCheck(check + 1)
                    }}
                >
                    Submit
                </button>
            </div>

            {/* </div> */}
        </div>
    )
}

export default Register
