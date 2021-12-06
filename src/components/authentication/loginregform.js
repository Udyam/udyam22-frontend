import { React, useState } from 'react'
import axios from '../../utils/axios'
import './loginregform.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from './Context/AuthContext'
import validator from 'validator'
import { Link } from 'react-router-dom'

toast.configure()

export default function RegisterForm() {
    const [user_email, setuser_email] = useState('')
    const [user_pass, setuser_pass] = useState('')
    /* const {setToken , setData} = useAuthContext();*/
    const { setToken } = useAuthContext()

    const userlogin = (e) => {
        e.preventDefault()
        if (user_email == '' || user_pass == '') {
            toast.warn('Please fill the empty fields.', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            return
        }
        setuser_email(user_email.trim())
        toast.info('Checking credentials...', {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
        axios
            .post('https://udyam22-backend.herokuapp.com/' + 'auth/login/', {
                email_or_username: user_email,
                password: user_pass,
            })
            .then((response) => {
                toast.success('Successfully logged in!!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
                {
                    console.log(response)
                    console.log(response.data)
                    console.log(response.data.data)
                    console.log(response.data.token)
                    /* setData(response.data.data);
              setToken(response.data.token);*/
                    setToken(response.data.token)
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error('Cannot Login!! :( Check credentials.', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
            })
    }

    const [collegeName, setCollegeName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Name, setName] = useState('')
    const [referalcode, setReferalcode] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [year, setYear] = useState('')
    /*const [image, setImage] = useState('../images/Group2471.png')*/

    const registerFieldsAreValid = (
        Name,
        collegeName,
        email,
        password,
        confirmpassword,
        year
    ) => {
        if (
            collegeName === '' ||
            email === '' ||
            Name === '' ||
            password === '' ||
            confirmpassword === '' ||
            year === ''
        ) {
            toast.warn('Please fill the required fields.', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            return false
        }
        if (!validator.isEmail(email)) {
            toast.warn('Please enter your email correctly', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            return false
        }

        if (password !== confirmpassword) {
            toast.warn('Passwords do not match!!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            return false
        }
        if (!validator.isStrongPassword(password)) {
            toast.warn('Please keep your Password strong.', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            toast.info(
                'Strong Passwords have minlength=8,and min(lower case letter,upper case letter,symbol,number)=1 each.',
                { position: toast.POSITION.BOTTOM_RIGHT }
            )
            return false
        }
        return true
    }
    /* const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]))
        }
    }*/

    const register = (e) => {
        e.preventDefault()

        if (
            registerFieldsAreValid(
                Name,
                collegeName,
                email,
                password,
                confirmpassword,
                year
            )
        ) {
            toast.warning('Please wait...', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })

            const dataForApiRequest = {
                name: Name,
                email: email,
                college_name: collegeName,
                password: password,
                year: year,
                referral_code: referalcode,
            }
            console.log(dataForApiRequest)
            axios
                .post(
                    'https://udyam22-backend.herokuapp.com/' + 'auth/register/',
                    dataForApiRequest
                )
                .then((response) => {
                    toast.success('Registered Successfully!!', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                    toast.info(
                        'Please check your email for the verification link!!',
                        { position: toast.POSITION.BOTTOM_RIGHT }
                    )
                    {
                        console.log(response.data)
                        console.log(response.data.data)
                        console.log(response.data.token)
                        /*setData(response.data.data);
            setToken(response.data.token);*/
                        setToken(response.data.token)
                    }
                })
                .catch(function (err) {
                    console.log(err)
                    toast.error(
                        'An account using same email or username is already created',
                        { position: toast.POSITION.BOTTOM_RIGHT }
                    )
                })
        }
    }
    const [addclass, setaddclass] = useState('')
    return (
        <div className="final">
            <div className={`logincontainer ${addclass}`} id="logincontainer">
                <div className="pscrt">
                    <div className="form-container  sign-in-container">
                        <form>
                            <h1>SIGN IN</h1>
                            <input
                                type="text"
                                className="in nputin"
                                name="iUseremail"
                                id="iUseremail"
                                placeholder="Email"
                                value={user_email}
                                onChange={(e) => {
                                    setuser_email(e.target.value)
                                }}
                            />
                            <input
                                type="password"
                                className="in nputin"
                                name="iPassword"
                                id="iPassword"
                                placeholder="Password"
                                value={user_pass}
                                onChange={(e) => {
                                    setuser_pass(e.target.value)
                                }}
                            />

                            <Link to="/recoverpage" className="fp">
                                Forgot Password
                            </Link>

                            <button
                                type="submit"
                                className="ghost"
                                onClick={userlogin}
                            >
                                LOGIN
                            </button>
                        </form>
                    </div>
                    <div className="form-container sign-up-container">
                        <h1 className="part">Already part?</h1>
                        <h2 className="part">
                            Already have an account sign-in here
                        </h2>
                        <button
                            className="other"
                            id="signIn"
                            onClick={() => setaddclass('')}
                        >
                            SIGN IN
                        </button>
                        <h2 className="mobile-part">
                            Already have an account ?
                            <h3
                                className="mobile-part-signIn"
                                onClick={() => setaddclass('')}
                            >
                                Sign-In here
                            </h3>
                        </h2>
                    </div>
                </div>

                <div className="roundbox">
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <form>
                                    {/* <div className="profile-pic-div">
                                        <img src={image} id="photo" />
                                        <input
                                            type="file"
                                            id="dp-file"
                                            onChange={onImageChange}
                                        />
                            </div>*/}{' '}
                                    <h1 className="h12">SIGN UP</h1>
                                    <input
                                        className="up"
                                        type="text"
                                        name="inputUsername"
                                        id="inputUsername"
                                        value={Name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Name"
                                    />
                                    <input
                                        className="up"
                                        type="email"
                                        name="inputEmail"
                                        id="inputEmail"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Email Address"
                                    />
                                    <input
                                        className="up"
                                        type="text"
                                        name="inputCollegeName"
                                        id="inputCollegeName"
                                        value={collegeName}
                                        onChange={(e) =>
                                            setCollegeName(e.target.value)
                                        }
                                        placeholder="College Name"
                                    />
                                    <select
                                        className="up"
                                        name="inputYear"
                                        id="inputYear"
                                        value={year}
                                        onChange={(e) =>
                                            setYear(e.target.value)
                                        }
                                    >
                                        <option value="">Select Year</option>
                                        <option value="ONE">First Year</option>
                                        <option value="TWO">Second Year</option>
                                        <option value="THREE">
                                            Third Year
                                        </option>
                                        <option value="FOUR">
                                            Fourth Year
                                        </option>
                                    </select>
                                    <input
                                        className="up"
                                        type="password"
                                        name="inputPassword"
                                        id="inputPassword"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Password"
                                    />
                                    <input
                                        className="up"
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={confirmpassword}
                                        onChange={(e) =>
                                            setConfirmpassword(e.target.value)
                                        }
                                        placeholder="Password"
                                    />
                                    <input
                                        className="up"
                                        type="text"
                                        name="referalcode"
                                        id="referalcode"
                                        value={referalcode}
                                        onChange={(e) =>
                                            setReferalcode(e.target.value)
                                        }
                                        placeholder="Referal code (Optional)"
                                    />
                                    <button
                                        type="submit"
                                        className="second"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            register(e)
                                        }}
                                    >
                                        SIGN UP
                                    </button>
                                </form>
                            </div>

                            <div className="overlay-panel overlay-right">
                                <h1 className="new">New here? </h1>
                                <h2 className="new">
                                    Register to take part in the technical
                                    extravaganza
                                </h2>
                                <button
                                    className="second"
                                    id="signUp"
                                    onClick={() =>
                                        setaddclass('right-panel-active')
                                    }
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
