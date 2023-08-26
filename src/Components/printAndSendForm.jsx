
import NavBar from "./NavBar";
import '../Styles/PrintAndSendForm.css'
import SendoLogoBlack from "../imgs/Sendo Logo black.png";
import Igb from '../imgs/Instagram black.png'
import Wab from '../imgs/whatsapp icon black.png'
import Emb from '../imgs/Instagram black.png'
import { useState } from "react";


function PrintAndSendForm() {
  const [shipperName, setShipperName] = useState('');
  const [shipperPhone, setShipperPhone] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  const handleInputChangeNames = (event, setState) => {
    const inputValueRegexName = /^[A-Za-z\s\-']+$/;
    const { value } = event.target;

    if (inputValueRegexName.test(value) || value === '') {
      setState(value);
    }
  };

  const handleInputChangeNumbers = (event, setState) => {
    const inputValueRegexNum = /^[0-9]*$/;
    const { value } = event.target;

    if (inputValueRegexNum.test(value)) {
      setState(value);
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleClickForm = () => {

    if(shipperName === '' || shipperPhone === '' || recipientPhone === '' || recipientName === '' || recipientAddress === '') {
    return alert (`Please, fill out all the blank filds.`)
    } else {
 return alert(`Thank you for using our services! In about 24 hours you will get a full quotation.`);
  }}  

  return (  
    <div className="PrintAndSendFormContainer">
      <NavBar isHomePage={false} />
      <div className="logoContainer">
        <img id="logo" src={SendoLogoBlack} alt="Sendo Logo" />
      </div>
      <div className="titleFormContainer">
        <h1>Print and Send Form</h1>
      </div>
      <form onSubmit={handleSubmit} action="#" method="post" id="formSection">
        {/* First row */}
        <div className="FormRows">
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="shipper-name">Shipper&apos;s Name:</label>
            <input
              value={shipperName}
              onChange={(event) => handleInputChangeNames(event, setShipperName)}
              className="formSpace"
              type="text"
              id="shipper-name"
              name="shipper-name"
              required
            />
           
          </div>
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="shipper-email">Email Address:</label>
            <input
             
              className="formSpace"
              type="email"
              id="shipper-email"
              name="shipper-email"
              required
            />
          </div>
        </div>
        {/* Second row */}
        <div className="FormRows">
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="recipient-phone">Phone Number:</label>
            <input
              value={shipperPhone}
              onChange={(e) => handleInputChangeNumbers(e, setShipperPhone)}
              className="formSpace"
              type="tel"
              id="recipient-phone"
              name="recipient-phone"
              required
            />
          </div>
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="files">Add Files:</label>
            <input className="formSpace" type="file" id="files" name="files" />
          </div>
        </div>
        {/* Third row */}
        <div className="FormRows">
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="recipient-name">Recipient&apos;s Name:</label>
            <input
              value={recipientName}
              onChange={(e) => handleInputChangeNames(e, setRecipientName)}
              className="formSpace"
              type="text"
              id="recipient-name"
              name="recipient-name"
              required
            />
          </div>
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="recipient-address">Full Address:</label>
            <input
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              className="formSpace"
              type="text"
              id="recipient-address"
              name="recipient-address"
              required
            />
          </div>
        </div>
        {/* Fourth row */}
        <div className="FormRows">
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="recipient-email">Email Address:</label>
            <input
              
              className="formSpace"
              type="email"
              id="recipient-email"
              name="recipient-email"
              required
            />
          </div>
          <div className="inputLabelContainer">
            <label className="formLabels" htmlFor="recipient-phone">Phone Number:</label>
            <input
              value={recipientPhone}
              onChange={(e) => handleInputChangeNumbers(e, setRecipientPhone)}
              className="formSpace"
              type="tel"
              id="recipient-phone"
              name="recipient-phone"
              required
            />
          </div>
        </div>
        <input onClick={handleClickForm} className="formSubmit" type="submit" value="Submit" />
      </form>

<div className="footerPrintAndSendForm">
 
 <div className="socialIcons">
    <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" rel="noopener"><img src={Igb} alt="Instagram" className="social" width="55" /></a>
    <a href="https://api.whatsapp.com/send?phone=16474252986&text=Welcome to SenDo, talk to us for a Quote!" rel="noopener"><img src={Wab} alt="WhatsApp" className="social" width="55" /></a>
    <a href="mailto:gojosearias@gmail.com" rel="noopener"><img src={Emb} alt="Email" className="social" width="55" /></a>
 </div>
<div className="copyRight">
<p id="copyRight">SenDo© - 2023 - All Rights Reserved</p>
</div>
<div className="phoneNumber">
    <p id="phoneNumber">647-425-2986</p>
</div>
    </div>

</div>
    
)

}

export default PrintAndSendForm;