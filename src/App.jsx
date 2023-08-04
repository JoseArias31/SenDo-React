import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import './App.css';
import TrackForm from './Components/trackForm.jsx';
import GetAndEstimateBotton from './Components/estimatePage.jsx';
import PrintAndSend from './Components/printAndSendButton.jsx';
import SendoLogoWhite from './imgs/Sendo Logo white.png';
import PrintAndSendForm from './Components/printAndSendForm.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
         <Route path="/print-and-send-form" element={PrintAndSendForm} />
        </Routes>
      </Router>
      <div className='pageOne'>
        {/* Navigation bar */}
        <NavBar />
        <div className='logoContainer'>
          <img id='logo' src={SendoLogoWhite} alt="Sendo Logo" />
        </div>
        <div className='firstTextContainer'>
          <h1 className='h1FirstText'>Print and Send Documents,</h1>
          <h1 className='h1FirstText'>Anywhere!</h1>
          <p className='pFirstText'><u>Only in Canada</u></p>
        </div>

        {/* Tracking Number Section*/}
        <div className='TrackOrderContainer'>
          <h2 className='h2FirstText'>Track your Order</h2>
          <TrackForm />
        </div>

        {/* Buttons*/}
        <div className='buttonsContainer'>
          <GetAndEstimateBotton />
          <PrintAndSend />
        </div>
      </div>
    </>
  );
}

export default App;

