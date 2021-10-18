import React, {useState,  useRef} from 'react'
import axios from '../utils/axios'
import "./loginregform.css";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../context/auth'

/* eslint-disable */
toast.configure()

export default function RegisterForm() {

  const { login,API_BASE_URL} = useAuth()
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const login_now = () => {
  const user_name = usernameRef.current.value;
  const pass_word = passwordRef.current.value;

  if (user_name && pass_word) {
    const data  = {
      username:user_name,
      password:pass_word
    }
    axios
    .post(API_BASE_URL + "auth/login/",{
      username: user_name,
      password: pass_word
    })
    .then(({data, status}) => {
      toast.success("Successfully logged in!",{position: toast.POSITION.BOTTOM_RIGHT})
      localStorage.setItem("token", data.token);
      login(data.token);
    })
    .catch(err => {
      toast.error("Cannot Login! Check credentials.",{position: toast.POSITION.BOTTOM_RIGHT})
    })
  } else {
    toast.error("Username And Password Cannot be Empty.",{position: toast.POSITION.BOTTOM_RIGHT})
  }
}

  const [collegeName, setCollegeName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [year, setYear] = useState('')
  const [gender, setGender] = useState('')
  
  const registerFieldsAreValid = (
    
    username,
    collegeName,
    email,
    phone,
    password,
    confirmpassword,
    gender,
    year
  ) => {
    if (
      collegeName === '' ||
      email === '' ||
      username === '' ||
      password === ''  ||
      confirmpassword === '' ||
      year=== ''  ||
      phone=== ''  ||
      gender===  '' 
    ) {
        return false
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return false
    }
    if (password !== confirmpassword) {
        return false
    }
    if (!/^\d{10}$/.test(phone)) {
      return false
    }
    return true
  }

  const register = (e) => {
    e.preventDefault()
    

    if (
      registerFieldsAreValid(username,collegeName,email,phone,password,confirmpassword,gender,year)
    ) {
      toast.warning('Please wait...',{position: toast.POSITION.BOTTOM_RIGHT})

      const dataForApiRequest = {
        name: username,
        email: email,
        collegeName: collegeName,
        password: password,
        phone: phone,
        gender: gender,
        year: year
      }
      axios.post(
        'auth/register/',
        dataForApiRequest,
      )
        .then(function ({ data, status }) {
          login(data.token)
          toast.success('Registered Successfully',{position: toast.POSITION.BOTTOM_RIGHT})
        })
        .catch(function (err) {
          toast.warning('An account using same email or username is already created',{position: toast.POSITION.BOTTOM_RIGHT})
        })
    } else {
      toast.warning('Please fill all the fields correctly',{position: toast.POSITION.BOTTOM_RIGHT})
    }
  }
  const [addclass, setaddclass] = useState("");
return (
  <div className="final">
  <div className={`container ${addclass}`} id="container">
  <div className="pscrt">
    <div className="form-container  sign-in-container">
      
        <form>
        <h1>SIGN IN</h1>
        <input
        type="text" className="in"
        name="inputUsername"
        id="inputUsername"
        placeholder="Username"
        ref={usernameRef}
        placeholder="Username"
      />
      <input
       type="password" className="in"
       name="inputPassword"
       id="inputPassword"
       placeholder="Password"
       ref={passwordRef}
       placeholder="Password"
     />
      <button
      type="submit"
      className="ghost"
      onClick={login_now}>
      LOGIN
      </button>
       </form>
   </div>
   <div className="form-container sign-up-container">
     <h1 className="part">Already part?</h1>
     <h2 className="part">Already have an account sign-in here</h2>
   <button
           className="other"
           id="signIn"
           onClick={() => setaddclass("")}
         >
           SIGN IN
         </button>
      </div> 
     </div>
    
     <div className="roundbox">
     <div className="overlay-container">
     <div className="overlay">
       <div className="overlay-panel overlay-left">
        
       <form>
     <h1 className="h12">SIGN UP</h1>
          <input
            type='text' 
            name='inputUsername'
            id='inputUsername'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
          <input
            type='email'
            name='inputEmail'
            id='inputEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
          />
          <input
            type='text'
            name='inputCollegeName'
            id='inputCollegeName'
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            placeholder='College Name'
          />
          <select
            name="inputYear" 
            id="inputYear">
            value={year}
            onChange={(e) => setYear(e.target.value)} >
          <option value=''>Select Year</option>
          <option value='1'>First Year</option>
          <option value='2'>Second Year</option>
          <option value='3'>Third Year</option>
          <option value='4'>Fourth Year</option></select>
          
          <input
            type='text'
            name='inputMobileno'
            id='inputMobileno'
            placeholder='Mobile No.'
            value={phone}
            onChange={(e) =>setPhone(e.target.value)}
             />
          <select 
            name="inputGender" 
            id="inputGender"
            value={gender}
            onChange={(e) => setGender(e.target.value)} >
          <option value=''>Select Gender</option>
          <option value='5'>Female</option>
          <option value='6'>Male</option>
          <option value='7'>better not say</option></select>
          
          <input
            type='password'
            name='inputPassword'
            id='inputPassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder='Password'
          />  
          <button
            type='submit'
            className="second"
            onClick={register}
          >
            SIGN UP
          </button>
       </form>
       </div>
       
       <div className="overlay-panel overlay-right">
         <h1 className="new">New here? </h1>
         <h2 className="new">Register to take part in the technical extravaganza</h2>
         <button
           className="second"
           id="signUp"
           onClick={() => setaddclass("right-panel-active")}
         >
          SIGN UP
         </button>
       </div>
      </div>
     </div>
    </div>
   </div> 
</div>
);
}
/* eslint-enable */ 