import React, {useState} from 'react'
import axios from '../../utils/axios'
import "./loginregform.css";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import validator from 'validator';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'


/* eslint-disable */
toast.configure()

export default function RegisterForm() {
  const [cookies, setCookies, removeCookies] = useCookies(['auth'])
  const [token, setTokenState ] = useState(cookies.token);  
  const setToken = (newToken) => {
    console.log(newToken);
    setCookies('token', newToken, { path: '/' })
    setTokenState(newToken);
  }


  
  const [user_name, setuser_name] = useState("");
  const [user_pass, setuser_pass] = useState("");
  const userlogin = (e) => {
    e.preventDefault()
    if (user_name == "" || user_pass == "") {
        toast.warn("Please fill the empty fields.",{position: toast.POSITION.BOTTOM_RIGHT})
        return;
    }
    setuser_name(user_name.trim());
    toast.info("Checking credentials...",{position: toast.POSITION.BOTTOM_RIGHT})
    axios
        .post('http://127.0.0.1:8000/'+ "auth/login/",{
            email_or_username: user_name,
            password: user_pass
        })
        .then(({ data, status }) => {
            toast.success("Successfully logged in!!",{position: toast.POSITION.BOTTOM_RIGHT})
            localStorage.setItem("token", data.token);
            console.log(data.token);
            setToken(data.token);
        })
        .catch((err) => {
            console.log(err);
            toast.error("Cannot Login!! :( Check credentials.",{position: toast.POSITION.BOTTOM_RIGHT})
        });
      }

  /*const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const login = () => {
  const user_name = usernameRef.current.value;
  const pass_word = passwordRef.current.value;

  if (user_name && pass_word) {
    toast.warning('Please wait...',{position: toast.POSITION.BOTTOM_RIGHT})
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
      login_now(data.token);
    })
    .catch(err => {
      toast.error("Cannot Login! Check credentials.",{position: toast.POSITION.BOTTOM_RIGHT})
    })
  } else {
    toast.error("Username And Password Cannot be Empty.",{position: toast.POSITION.BOTTOM_RIGHT})
  }
}*/

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
      toast.warn('Please fill the empty fields.',{position: toast.POSITION.BOTTOM_RIGHT})
        return false
    }
    if (!validator.isEmail(email)) {
    toast.warn('Please enter your email correctly',{position: toast.POSITION.BOTTOM_RIGHT})
      return false
  }
  if (!validator.isMobilePhone(phone)) {
    toast.warn('Please enter your 10 digit MobileNo. correctly!!',{position: toast.POSITION.BOTTOM_RIGHT})
    return false
   }
    if (password !== confirmpassword) {
    toast.warn('Passwords do not match!!',{position: toast.POSITION.BOTTOM_RIGHT})
        return false
    }
    if(!validator.isStrongPassword(recover_password)){
      toast.warn("Please keep your Password strong.",{position: toast.POSITION.BOTTOM_RIGHT})
      toast.info("Strong Passwords have minlength=8,and min(lower case letter,upper case letter,symbol,number)=1 each.",{position: toast.POSITION.BOTTOM_RIGHT})
      return false;
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
        first_name: username,
        last_name: username,
        username: username,
        email: email,
        college_name: collegeName,
        password: password,
        mobile: phone,
        gender: gender,
        year: year,
        referral_code: " "
      }
      console.log(dataForApiRequest)
      axios.post('http://127.0.0.1:8000/'+ 'auth/register/',
        dataForApiRequest,
      )
        .then(function ({ data, status }) {
          toast.success('Registered Successfully!!' ,{position: toast.POSITION.BOTTOM_RIGHT})
          toast.info('Please check your email for the verification link!!' ,{position: toast.POSITION.BOTTOM_RIGHT})
          localStorage.setItem("token", data.token);
          setToken(data.token)
          
        })
        .catch(function (err) {
          console.log(err)
          toast.error('An account using same email or username is already created',{position: toast.POSITION.BOTTOM_RIGHT})
        })
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
        type="text" className="in nputin"
        name="iUsername"
        id="iUsername"
        placeholder="Username"
        value={user_name}
        onChange={(e)=>{setuser_name(e.target.value)}}
      />
      <input
       type="password" className="in nputin"
       name="iPassword"
       id="iPassword"
       placeholder="Password"
       value={user_pass}
       onChange={(e)=>{setuser_pass(e.target.value)}}
     />
     <Router>
      <Link to="/recoverpage" className="fp">
         Forgot Password
      </Link>
      </Router>
      <button
      type="submit"
      className="ghost"
      onClick={userlogin}>
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
         <h2 className="mobile-part">Already have an account ?<h3 className="mobile-part-signIn"  onClick={() => setaddclass("")}>Sign-In here</h3></h2>
      </div> 
     </div>
    
     <div className="roundbox">
     <div className="overlay-container">
     <div className="overlay">
       <div className="overlay-panel overlay-left">
        
       <form>
     <h1 className="h12">SIGN UP</h1>
          <input
          className='up'
            type='text' 
            name='inputUsername'
            id='inputUsername'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            
          />
          <input
          className='up'
            type='email'
            name='inputEmail'
            id='inputEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
          />
          <input
          className='up'
            type='text'
            name='inputCollegeName'
            id='inputCollegeName'
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            placeholder='College Name'
          />
          <select
          className='up'
            name="inputYear" 
            id="inputYear"
            value={year}
            onChange={(e) => setYear(e.target.value)} >
          <option value=''>Select Year</option>
          <option value='ONE'>First Year</option>
          <option value='TWO'>Second Year</option>
          <option value='THREE'>Third Year</option>
          <option value='FOUR'>Fourth Year</option></select>
          
          <input
          className='up'
            type='text'
            name='inputMobileno'
            id='inputMobileno'
            placeholder='Mobile No.'
            value={phone}
            onChange={(e) =>setPhone(e.target.value)}
             />
          <select 
          className='up'
            name="inputGender" 
            id="inputGender"
            value={gender}
            onChange={(e) => setGender(e.target.value)} >
          <option value=''>Select Gender</option>
          <option value='F'>Female</option>
          <option value='M'>Male</option>
          <option value='O'>better not say</option></select>
          
          <input
            className='up'
            type='password'
            name='inputPassword'
            id='inputPassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <input
            className='up'
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
            onClick={(e)=>{e.preventDefault();register(e);}}
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