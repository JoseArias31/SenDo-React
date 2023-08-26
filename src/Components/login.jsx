import '../Styles/login.css'
import NavBar from './NavBar';
import SendoLogoBlack from "../imgs/Sendo Logo black.png";
import Igb from '../imgs/Instagram black.png'
import Wab from '../imgs/whatsapp icon black.png'
import Emb from '../imgs/Instagram black.png'
import TrackForm from './trackForm.jsx';
import { useState } from 'react';
import { randomName } from './clients.jsx'
function Login() {

const [loginUser, SetLoginUser ] = useState("");
const [password, SetPassword ] = useState("");
const HandleInputChangeUser = (event) => {
    const value = event.target.value;
    SetLoginUser(value);
  };

  const HandleInputChangePassword = (event) => {
    const value = event.target.value;
    SetPassword(value);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (loginUser === '' || password === '') {
      alert("Incorrect username or password. Please try again.");
    } else {
      alert(`Hello ${randomName}! You've successfully logged in.`);
      SetLoginUser("");
      SetPassword("");
      window.location.reload();
    }
  };

  const hnadleCreateUser =() => {

    alert("Thank you for creating an account with SenDo!")
  }
 

    return (
    <div className='loginContainer'>
    <NavBar isHomePage={false} />
    <div className="logoContainer">
        <img id="logo" src={SendoLogoBlack} alt="Sendo Logo" />
      </div>
    <div id="loginContainer">
        <form onSubmit={handleSubmit} id="loginAccess" style={{ display: 'flex' }}>
            <div id="firstPart">
            <h1>Sign in</h1>

                <input value={loginUser} onChange={(event) => HandleInputChangeUser(event, SetLoginUser)} type="email" id="emailLogin" name="emailLogin" placeholder="Email*"  /><br />
                <input value={password} onChange={(event) => HandleInputChangePassword(event, SetPassword)} type="password" id="password" name="passwordLogin" placeholder="password*"  />
                <h2>Forgot Password?</h2>
                <li className='RememberMeContainer'>
                    <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberMe" />
                    <label>Remember me</label>
                </li>
                <button type="submit" id="login"><span>Sign in</span></button>
                <h3 style={{ color: 'black', fontSize: '20px', textAlign: 'center' }}>Do not you have an account?</h3>
           
           <div className='createAnAccountButtonContainer'>
            <button id='createAnAccountButton' onClick={hnadleCreateUser} style={{ color: 'black', textDecoration: 'underline', fontSize: '20px', textAlign: 'center' }}>Create one now!</button>
            </div>
           
            </div>
            
            <div id="secondPart">
                <h1><b>Looking for your order?</b></h1>
                <p>
                    See your order even if you are not a registered user. Enter your tracking number.
                </p>
                
                <TrackForm />
            </div>
            </form>
    </div>
    <div className="footerServices">
 
 <div className="socialIcons">
    <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" rel="noopener"><img src={Igb} alt="Instagram" className="social" width="55" /></a>
    <a href="https://api.whatsapp.com/send?phone=16474252986&text=Welcome to SenDo, talk to us for a Quote!" rel="noopener"><img src={Wab} alt="WhatsApp" className="social" width="55" /></a>
    <a href="mailto:gojosearias@gmail.com" rel="noopener"><img src={Emb} alt="Email" className="social" width="55" /></a>
 </div>
<div className="copyRight">
<p id="copyRight">SenDo© - 2023 - All Rights Reserved</p>
</div>
<div className="phoneNumber">
    <a className='number' href="tel:+16474252986"><p id="phoneNumber">647-425-2986</p></a>
</div>
    </div>
    </div>

)}

export default Login;