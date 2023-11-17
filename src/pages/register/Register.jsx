import { useRef, useState } from 'react';

import './Register.scss'

import { Link } from 'react-router-dom';

const Register = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const emailRef =useRef();
  const passwordRef =useRef();
  const handStart=()=>{
    setEmail(emailRef.current.value);
  }
  const handFinish=()=>{
    setPassword(passwordRef.current.value);
  }
  return (
    <div className='register'>
        <div className="top">
      <div className="wrapper">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt=''/>
        <Link to='/login' style={{textDecoration:'none'}}><button className="loginButton">Sign In</button></Link>
     
       <div className="container">
        <h1>Unlimited Movies.....</h1>
        <h2>Watch anywhere</h2>
        <p>Ready to watch? login please</p>
        {!email ? (

        <div className="input">
            <input type="email" placeholder='email' ref={emailRef} />
            <button className="registerButton" onClick={handStart}>Get Start</button>
        </div>
        ):   <form className="input">
        <input type="password" placeholder='password' ref={passwordRef} />
        <button className="registerButton" onClick={handFinish}>Start</button>
    </form>
        }
      </div>
        </div>
        </div> 
    </div>
  )
}

export default Register
