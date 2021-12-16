import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
// import isEmail from 'validator/lib/isEmail'
// import isPhone from 'validator/lib/isMobilePhone'
import './Submission.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const API_BASE_URL='https://udyam22-backend.herokuapp.com'

const Submission = () => {
    const [input, setInput] = useState({
        teamname: '',
        event: '',
        submission: ''
    })
    const [check, setCheck] = useState(0)

    const inputChangeHandler = (e) => {
        const newInput = { ...input }
        newInput[e.target.name] = e.target.value
        setInput(newInput)
        // console.log(input);
    }
    
    // function submitHandler(e) {
    //     console.log("e",e);
        useEffect(() => {
            if(check){
                console.log("check=", check);
                console.log("input=",input);
                axios.post(API_BASE_URL+'/API/team/submission/',input,{
                        headers: {
                            'Authorization': "Token d102f9b8531448411f3658ecfdeeee5b0fbf2a17"
                        }
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
        },[check])

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
                        <select name="event" value={input.event} onChange={(e) => {
                                inputChangeHandler(e)
                            }} id="id_event" className="dropdown">
                            <option>EVENT</option>
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
                <button className="button" onClick={()=>{console.log("button clicked"); setCheck(check+1);}}>Submit</button>
            </div>

            {/* </div> */}
        </div>
    )
}

export default Submission
