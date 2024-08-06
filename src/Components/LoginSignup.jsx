import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className='underline'></div>
        </div>
        <div className="inputs">
            {action=="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt="User Icon" />
                <input type="text" placeholder='Enter your name'/>
            </div>}
            <div className='input'>
                <img src={email_icon} alt="Email Icon" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className='input'>
                <img src={password_icon} alt="Password Icon" />
                <input type="password" placeholder='Enter your password'/>
            </div>
        </div>
        {action=="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>}
        <div className="submit-container">
            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
            <div className={action=="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

        </div>
    </div>
  )
}

export default LoginSignup;
