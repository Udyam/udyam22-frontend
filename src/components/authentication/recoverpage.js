import React, { useState } from 'react'
import {toast} from 'react-toastify'
import validator from 'validator';
import './recoverpage.css'
toast.configure()
/* eslint-disable */
export default function RecoverForm () {
    const [recover_email, setrecover_email] = useState('')
  
    const recover_through_email = (e) => {
        e.preventDefault()
        if (recover_email == "" || !validator.isEmail(recover_email)) {
            toast.warn("Please fill the empty fields.",{position: toast.POSITION.BOTTOM_RIGHT})
            return;
        }
        toast.warn("Kindly wait!!",{position: toast.POSITION.BOTTOM_RIGHT})
        axios
            .post('http://127.0.0.1:8000/'+ "auth/login/",{
                
            })
            .then(({ data, status }) => {
                toast.info("Great!! Please check your email for the link through which you can reset your password.",{position: toast.POSITION.BOTTOM_RIGHT})
               
            
            })
            .catch((err) => {
                console.log(err);
                toast.error("Some error occurred!! Make sure you registered with the same email-id.",{position: toast.POSITION.BOTTOM_RIGHT})
            });
          }
  

    return (
        <div className='wholepage' >
        <div className='logocircle1' >
            <img
                            src="../images/udyamLogo.png"
                            className="Udyamlogo1"
                            alt="Udyam"
                        />
            </div>
            <div className="recover-form-container">
                <h1 className="recover-form-head"> Recover now </h1><br/>
                <h3 className="recover-form-title"> Please provide the registered email address below </h3>
           
                <form>
                    
                    
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={recover_email}
                            onChange={(e)=>{setrecover_email(e.target.value)}}
                            className="recover"
                            
                        />
               
                        <button type="submit" className="recover-form-button" onClick={recover_through_email}>
                         SEND
                        </button>
                
                </form>
            </div>
            </div>
     
    )
}
/* eslint-able */