import React from 'react'
import { Form, FormGroup, Input} from 'reactstrap'
// import isEmail from 'validator/lib/isEmail'
// import isPhone from 'validator/lib/isMobilePhone'
import './Submission.css'

const Register = () => {

    // const [input, setInput] = useState({
    //     email: '',
    //     phone: '',
    // })

    // const inputChangeHandler = (e) => {
    //     const newInput = { ...input }
    //     newInput[e.target.name] = e.target.value
    //     setInput(newInput)
    // }
    return (
        <div className="container">
            {/* <h1 className="registerHeader">REGISTER NOW</h1> */}

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
                                <select name="EVENT" id="id_event" className="dropdown">
                                    <option>EVENT</option>
                                    <option>MOSAIC</option>
                                    <option>SPYBITS</option>
                                    <option>I-CHIP</option>
                                    <option>COMMNET</option>
                                    <option>CONTINNUM</option>
                                    <option>DIGISM</option>
                                    <option>XIOTA</option>
                                    <option>CASSANDRA</option>
                                    <option>FUNCKIT</option>
                                </select>
                                {/* </Input> */}
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="text"
                                    name="teamname"
                                    placeholder="TEAM NAME"
                                    className="team"
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="text"
                                    name="github"
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
                        <button className="button">Submit</button>
                    </div>

                {/* </div> */}
                
            </div>
        </div>
    )
}

export default Register
