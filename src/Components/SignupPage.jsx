import "./Signup.css";
import { useState } from "react";
import logo from '../assets/Logo-Instagram.png';
function Signup() {
  const [login ,setLogin] = useState(true);
  function switchLogin(){
          setLogin(!login);
  }
  return (

    <>
    <div className="big-container">
        <div className="container">
                <div className="image">
                  <img
                   src= {logo}
                    alt="Logo"
                    id="LogoImage"
                  />
                </div>
                <form action="#">
                  <input  hidden ={login} type="text" placeholder="Enter UserName" />
                  <br/>
                  <input
                    type="email"
                    name="userEmail"
                    id="Email"
                    placeholder="Enter Your Email"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    name="userPassword"
                    id="password"
                    placeholder="Password"
                  />
                  <br />
                  <button type="submit" className="btn">{login ? 'SignIn' : 'SignUp'}</button>
                </form>
                <p className="text">
                  { login ? 'Dont have an account? ': 'have an account? '}<span onClick={switchLogin} >{
                     login ? 'Sign Up' : 'LogIn'
                    }</span>
                 
                </p>
              </div>
    </div>
      
    </>
  );
}

export default Signup;
