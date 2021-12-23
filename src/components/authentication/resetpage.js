import React, { useState } from 'react'
import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import validator from 'validator'
import { useLocation, useHistory } from 'react-router-dom'
import './resetpage.css'

toast.configure()

export default function ResetForm() {
    const [recover_password, setrecover_password] = useState('')
    const [confirmrecover_password, setconfirmrecover_password] = useState('')
    const history = useHistory()
    const params = new URLSearchParams(useLocation().search)
    const tokenget = params.get('token')
    const uidbget = params.get('id')

    const reset_through_email = (e) => {
        e.preventDefault()
        if (recover_password == '') {
            toast.warn('Please fill both the fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            return
        }
        if (recover_password !== confirmrecover_password) {
            toast.warn('Passwords do not match', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            return
        }
        if (!validator.isStrongPassword(recover_password)) {
            toast.warn('Please keep your Password strong.', {
                position: toast.POSITION.BOTTOM_RIGHT,
            })
            toast.info(
                'Strong Passwords have minlength=8,and min(lower case letter,upper case letter,symbol,number)=1 each.',
                { position: toast.POSITION.BOTTOM_RIGHT }
            )
            return
        }
        toast.warn('Kindly wait!!', { position: toast.POSITION.BOTTOM_RIGHT })
        axios
            .patch(
                'https://udyam22-backend.herokuapp.com/' +
                    'auth/password_reset/update_password/',
                {
                    password: recover_password,
                    token: tokenget,
                    uidb64: uidbget,
                }
            )
            .then((response) => {
                console.log(response.data)
                toast.success('Great!! Your Password has been changed .', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                })
                history.push('/notifyreset')
            })
            .catch(function (err) {
                console.log(err)
                toast.error(
                    "Some error occurred!! Don't worry we will change your password",
                    { position: toast.POSITION.BOTTOM_RIGHT }
                )
            })
    }

    return (
        <div className="wholepage">
            <div className="resetpage-logocircle">
                <img
                    src="../images/photo_2021-11-27_18-13-10.png"
                    className="resetpage-Udyamlogo"
                    alt="Udyam"
                />
            </div>

            <div className="resetpage-form-container">
                <h1 className="resetpage-form-head"> Reset Password </h1>
                <br />
                <h3 className="resetpage-form-title">
                    {' '}
                    Enter your new password below{' '}
                </h3>
                <form className="resetpage-resetform">
                    <input
                        type="password"
                        name="resetpassword"
                        placeholder="Password"
                        value={recover_password}
                        onChange={(e) => {
                            setrecover_password(e.target.value)
                        }}
                        className="resetpage-reset"
                    />
                    <input
                        type="password"
                        name="confirmresetpassword"
                        placeholder="Confirm Password"
                        value={confirmrecover_password}
                        onChange={(e) => {
                            setconfirmrecover_password(e.target.value)
                        }}
                        className="resetpage-reset"
                    />

                    <button
                        type="submit"
                        className="resetpage-form-button"
                        onClick={reset_through_email}
                    >
                        UPDATE
                    </button>
                </form>
            </div>
        </div>
    )
}
