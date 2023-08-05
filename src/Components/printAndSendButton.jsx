import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import TrackForm from "./trackForm";
import add from "../imgs/add.png/";
import '../Styles/printAndSend.css'
import '../Styles/getAnEstimate.css'
import SendoLogoWhite from "../imgs/Sendo Logo white.png";
import GetAndEstimateBotton from "./estimatePage";



export const Prueba = () => {
  return (
    <div className="pageOne">
      {/* Navigation bar */}
      <NavBar />
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
    </div>
  );
};
