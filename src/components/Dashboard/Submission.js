import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
// import isEmail from 'validator/lib/isEmail'
// import isPhone from 'validator/lib/isMobilePhone'
import './Submission.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const API_BASE_URL = 'https://udyam22-backend.herokuapp.com'

const Submission = ({ dashboardToken }) => {
    const [input, setInput] = useState({
        teamname: '',
        event: '',
        submission: '',
    })
    const [check, setCheck] = useState(0)

    const year = localStorage.getItem('year')
    //console.log('year=', year)

    const inputChangeHandler = (e) => {
        const newInput = { ...input }
        newInput[e.target.name] = e.target.value
        setInput(newInput)
        // console.log(input);
    }

    // function submitHandler(e) {
    //     console.log("e",e);
    useEffect(() => {
        if (check) {
            if (
                input.teamname.length > 0 &&
                input.event.length > 0 &&
                input.submission.length > 0
            ) {
                //console.log('check=', check)
                //console.log('input=', input)
                axios
                    .post(API_BASE_URL + '/API/team/submission/', input, {
                        headers: {
                            Authorization: `Token ${dashboardToken}`,
                        },
                    })
                    .then(() => {
                        //console.log(res)
                        //console.log('done')
                        toast.success(
                            'Your Submission was successfully received',
                            {
                                position: toast.POSITION.BOTTOM_RIGHT,
                            }
                        )

                        // set all states to initial state
                        setInput({
                            teamname: '',
                            event: '',
                            submission: '',
                        })
                        setCheck(0)
                    })
                    .catch((err) => {
                        //console.log(err)
                        toast.error(err.response.data.error, {
                            position: toast.POSITION.BOTTOM_RIGHT,
                        })
                        // set all states to initial state
                        setInput({
                            teamname: '',
                            event: '',
                            submission: '',
                        })
                        setCheck(0)
                    })
            } else {
                toast.error('Please fill all the fields', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
            }
        }
    }, [check])

    return (
        <div className="submissionContainer">
            {/* <div className="submissionForm"> */}
            {/* <h1>Form</h1> */}

            <div className="submissionForm">
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
                            }}
                            id="id_event"
                            className="dropdown"
                        >
                            <option className="optionDropdown">EVENT</option>
                            <option value="MOSAIC" className="optionDropdown">
                                MOSAIC
                            </option>
                            <option value="SPYBITS" className="optionDropdown">
                                SPYBITS
                            </option>
                            <option value="ICHIP" className="optionDropdown">
                                ICHIP
                            </option>
                            <option value="COMMNET" className="optionDropdown">
                                COMMNET
                            </option>
                            <option
                                value="CONTINUUM"
                                className="optionDropdown"
                            >
                                CONTINUUM
                            </option>
                            <option value="DIGISIM" className="optionDropdown">
                                DIGISIM
                            </option>
                            <option value="XIOTA" className="optionDropdown">
                                XIOTA
                            </option>
                            <option
                                value="CASSANDRA"
                                className="optionDropdown"
                            >
                                CASSANDRA
                            </option>
                            {year === 'ONE' && (
                                <option
                                    value="FUNCKIT"
                                    className="optionDropdown"
                                >
                                    FUNCKIT
                                </option>
                            )}
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
                            style={{
                                backgroundColor: 'rgba(196, 196, 196, 0.5)',
                                color: '#CAF0F8',
                            }}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type="text"
                            name="submission"
                            value={input.submission}
                            onChange={(e) => {
                                inputChangeHandler(e)
                            }}
                            placeholder="GITHUB LINK"
                            className="git"
                            style={{
                                backgroundColor: 'rgba(196, 196, 196, 0.5)',
                                color: '#CAF0F8',
                            }}
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
                </Form>
            </div>

            <div className="buttonContainer">
                <button
                    className="button"
                    onClick={() => {
                        //console.log('button clicked')
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

export default Submission
