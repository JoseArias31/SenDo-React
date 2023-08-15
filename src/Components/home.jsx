import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import TrackForm from "./trackForm";
import add from "../imgs/add.png/";
import '../Styles/printAndSend.css'
import '../Styles/getAnEstimate.css'
import '../Styles/PrintAndSendForm.css'
import SendoLogoWhite from "../imgs/Sendo Logo white.png";
import GetAndEstimateBotton from "./estimatePage";
import Igb from '../imgs/Instagram black.png'
import Wab from '../imgs/whatsapp icon black.png'
import Emb from '../imgs/Instagram black.png'


export const Home = () => {

  
  return (
    <>
    <div className="pageOne">
      {/* Navigation bar */}
      <NavBar isHomePage={true} />
      <div className="logoContainer">
        <img id="logo" src={SendoLogoWhite} alt="Sendo Logo" />
      </div>
      <div className="firstTextContainer">
        <h1 className="h1FirstText">Print and Send Documents,</h1>
        <h1 className="h1FirstText">Anywhere!</h1>
        <p className="pFirstText">
          <u>Only in Canada</u>
        </p>
      </div>

      {/* Tracking Number Section*/}
      <div className="TrackOrderContainer">
        <h2 className="h2FirstText">Track your Order</h2>
        <TrackForm />
      </div>

      {/* Buttons*/}
      <div className="buttonsContainer">
      <GetAndEstimateBotton />        
        <div className="printAndSendContainer">
           <Link id="aForm" to="/SecondPage">
            <button type="submit" id="printAndSend">
              <img src={add} alt="add file logo" id="add" />
              <span className="spanFirstTestSingle">Print and Send!</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="footerPrintAndSendForm">
 
 <div className="socialIcons">
    <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" rel="noopener"><img src={Igb} alt="Instagram" className="social2" width="55" /></a>
    <a href="https://api.whatsapp.com/send?phone=16474252986&text=Welcome to SenDo, talk to us for a Quote!" rel="noopener"><img src={Wab} alt="WhatsApp" className="social2" width="55" /></a>
    <a href="mailto:gojosearias@gmail.com" rel="noopener"><img src={Emb} alt="Email" className="social2" width="55" /></a>
 </div>
<div className="copyRight">
<p id="copyRightHome">SenDo© - 2023 - All Rights Reserved</p>
</div>
<div className="phoneNumber">
<a className='number2' href="tel:+16474252986"><p id="phoneNumber2">647-425-2986</p></a>
</div>
    </div>
    </div>  

    </>
  );
};
