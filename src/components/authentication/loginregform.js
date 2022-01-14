import { React, useState, useEffect } from 'react'
import axios from '../../utils/axios'
import './loginregform.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from './Context/AuthContext'
import validator from 'validator'
import { Link, useHistory } from 'react-router-dom'

toast.configure()

export default function RegisterForm() {
    const history = useHistory()
    if (
        localStorage.getItem('userToken') &&
        localStorage.getItem('userToken') != 'undefined'
    )
        history.push('/comingsoon')

    const [user_email, setuser_email] = useState('')
    const [user_pass, setuser_pass] = useState('')
    const [check, setCheck] = useState(0)
    const { setToken } = useAuthContext()

    const userlogin = (e) => {
        e.preventDefault()
        setCheck(1)
    }
    useEffect(() => {
        console.log('check=', check)
        if (check == 1) {
            if (user_email == '' || user_pass == '') {
                toast.warn('Please fill the empty fields.', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })

                setCheck(0)
                return
            }
            if (!validator.isEmail(user_email)) {
                toast.warn('Please enter your email correctly', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
                setuser_email('')
                setuser_pass('')
                setCheck(0)
                return
            }
            toast.info('Checking credentials...', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            axios
                .post(
                    'https://udyam22-backend.herokuapp.com/' + 'auth/login/',
                    {
                        email: user_email,
                        password: user_pass,
                    }
                )
                .then((response) => {
                    toast.success('Successfully logged in!!', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                    {
                        setToken(response.data.token)
                        history.push('/comingsoon')
                    }
                    setuser_email('')
                    setuser_pass('')
                    setCheck(0)
                })
                .catch((err) => {
                    console.log(err)
                    toast.error(err.response.data.error, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                    setuser_email('')
                    setuser_pass('')
                    setCheck(0)
                })
        }
    }, [check])

    const [collegeName, setCollegeName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Name, setName] = useState('')
    const [referalcode, setReferalcode] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [year, setYear] = useState('')

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
            setCheck(2)
        }
    }
    useEffect(() => {
        console.log('check=', check)
        if (check == 2) {
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
                    setName('')
                    setCollegeName('')
                    setConfirmpassword('')
                    setEmail('')
                    setPassword('')
                    setReferalcode('')
                    setYear('')
                    {
                        setToken(response.data.token)
                        history.push('/comingsoon')
                    }
                    setCheck(0)
                })
                .catch(function (err) {
                    console.log(err)
                    toast.error(err.response.data.email, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                    toast.error(err.response.data.referral_code, {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                    setName('')
                    setCollegeName('')
                    setConfirmpassword('')
                    setEmail('')
                    setPassword('')
                    setReferalcode('')
                    setYear('')
                    setCheck(0)
                })
            setCheck(0)
        }
    }, [check])

    const [addclass, setaddclass] = useState('')
    return (
        <div className="loginregform-final">
            <div
                className={`loginregform-logincontainer ${addclass}`}
                id="logincontainer"
            >
                <div>
                    <div className="loginregform-form-container  loginregform-sign-in-container">
                        <form className="loginregform-form">
                            <h1 className="loginregform-head">SIGN IN</h1>
                            <input
                                type="text"
                                className="loginregform-in nputin"
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
                                className="loginregform-in nputin"
                                name="iPassword"
                                id="iPassword"
                                placeholder="Password"
                                value={user_pass}
                                onChange={(e) => {
                                    setuser_pass(e.target.value)
                                }}
                            />

                            <Link to="/recoverpage" className="loginregform-fp">
                                Forgot Password
                            </Link>

                            <button
                                type="submit"
                                className="loginregform-ghost"
                                onClick={userlogin}
                            >
                                LOGIN
                            </button>
                        </form>
                    </div>
                    <div className="loginregform-form-container loginregform-sign-up-container">
                        <h1 className="loginregform-part">Already part?</h1>
                        <h2 className="loginregform-part">
                            Already have an account sign-in here
                        </h2>
                        <button
                            className="loginregform-other"
                            id="loginregform-signIn"
                            onClick={() => setaddclass('')}
                        >
                            SIGN IN
                        </button>
                        <h2 className="loginregform-mobile-part">
                            Already have an account ?
                            <h3
                                className="loginregform-mobile-part-signIn"
                                onClick={() => setaddclass('')}
                            >
                                Sign-In here
                            </h3>
                        </h2>
                    </div>
                </div>

                <div>
                    <div className="loginregform-overlay-container">
                        <div className="loginregform-overlay">
                            <div className="loginregform-overlay-panel loginregform-overlay-left">
                                <form className="loginregform-form">
                                    <h1 className="loginregform-h12">
                                        SIGN UP
                                    </h1>
                                    <input
                                        className="loginregform-up"
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
                                        className="loginregform-up"
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
                                        className="loginregform-up"
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
                                        className="loginregform-up"
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
                                        className="loginregform-up"
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
                                        className="loginregform-up"
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={confirmpassword}
                                        onChange={(e) =>
                                            setConfirmpassword(e.target.value)
                                        }
                                        placeholder="Confirm Password"
                                    />
                                    <input
                                        className="loginregform-up"
                                        type="text"
                                        name="referalcode"
                                        id="referalcode"
                                        value={referalcode}
                                        onChange={(e) =>
                                            setReferalcode(e.target.value)
                                        }
                                        placeholder="Referral code (Optional)"
                                    />
                                    <button
                                        type="submit"
                                        className="loginregform-second"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            register(e)
                                        }}
                                    >
                                        SIGN UP
                                    </button>
                                </form>
                            </div>

                            <div className="loginregform-overlay-panel loginregform-overlay-right">
                                <h1 className="loginregform-new">New here? </h1>
                                <h2 className="loginregform-new">
                                    Register to take part in the technical
                                    extravaganza
                                </h2>
                                <button
                                    className="loginregform-second"
                                    id="loginregform-signUp"
                                    onClick={() =>
                                        setaddclass(
                                            'loginregform-right-panel-active'
                                        )
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
