import React, { useState } from 'react'
import {toast} from 'react-toastify'
import validator from 'validator';
import './resetpage.css'

toast.configure()
/* eslint-disable */
export default function ResetForm () {
    const [recover_password, setrecover_password] = useState('');
    const [confirmrecover_password, setconfirmrecover_password] = useState('');
    
    const reset_through_email = (e) => {
        console.log(window.location.search);
        const params = new URLSearchParams(window.location.search);
        console.log(params.get('token'));
        console.log(params.get('uidb64'));
        const tokenget = params.get('token');
        const uidbget = params.get('uidb64');
        
        e.preventDefault()
        if (recover_password!==confirmrecover_password) {
            toast.warn("Passwords do not match",{position: toast.POSITION.BOTTOM_RIGHT})
            return;
        }
        if(!validator.isStrongPassword(recover_password)){
            toast.warn("Please keep your Password strong.",{position: toast.POSITION.BOTTOM_RIGHT})
            toast.info("Strong Passwords have minlength=8,and min(lower case letter,upper case letter,symbol,number)=1 each.",{position: toast.POSITION.BOTTOM_RIGHT})
            return;
        }
        toast.warn("Kindly wait!!",{position: toast.POSITION.BOTTOM_RIGHT})
        axios
            .patch('https://udyam22-backend.herokuapp.com/'+ "auth/password_reset/update_password/",{
                password: recover_password,
                token: tokenget,
                uidb64: uidbget
                 
            })
            .then((response) =>  {
                console.log(response.data);
                toast.success("Great!! Your Password has been changed .",{position: toast.POSITION.BOTTOM_RIGHT})       
               
            })
            .catch(function(err)  {
                console.log(err);
                toast.error("Some error occurred!! Don't worry we will change your password",{position: toast.POSITION.BOTTOM_RIGHT})
            });
          }
  

    return (
        <div className='wholepage' >
            <div className='logocircle' >
                <img
                               src="../images/photo_2021-11-27_18-13-10.png"
                               className="Udyamlogo"
                               alt="Udyam"
                               />
                </div>
                
            <div  className="reset-form-container">
                
                <h1 className="reset-form-head"> Reset Password </h1><br/>
                <h3 className="reset-form-title"> Enter your new password below </h3>
                <form>
                        <input
                            type="password"
                            name="resetpassword"
                            placeholder="Password"
                            value={recover_password}
                            onChange={(e)=>{setrecover_password(e.target.value)}}
                            className='reset'
                            
                        />
                        <input
                            type="password"
                            name="confirmresetpassword"
                            placeholder="Confirm Password"
                            value={confirmrecover_password}
                            onChange={(e)=>{setconfirmrecover_password(e.target.value)}}
                            className="reset"
                            
                        />
                
                        <button type="submit" className="reset-form-button" onClick={reset_through_email}>
                         UPDATE
                        </button>
                    
                </form>
            </div>
            </div>
     
    )
}
/* eslint-able */