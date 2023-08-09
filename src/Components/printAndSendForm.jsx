
import NavBar from "./NavBar";
import '../Styles/PrintAndSendForm.css'
import SendoLogoBlack from "../imgs/Sendo Logo black.png";
import Igb from '../imgs/Instagram black.png'
import Wab from '../imgs/whatsapp icon black.png'
import Emb from '../imgs/Instagram black.png'
function PrintAndSendForm() {

return(

<div className="PrintAndSendFormContainer">
    <NavBar isHomePage={false} />
    <div className="logoContainer">
        <img id="logo" src={SendoLogoBlack} alt="Sendo Logo" />
      </div>
      <div className="titleFormContainer">
      <h1>Print and Send Form</h1>
      </div>
<form action="#" method="post" id="formSection">
      
      <div className="FormRows">
        <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="shipper-name">Shippers Full Name:</label>
      <input className="formSpace" type="text1" id="shipper-name" name="shipper-name" required />
      </div>
      <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="shipper-email">Email Address:</label>
      <input className="formSpace" type="email" id="shipper-email" name="shipper-email" required />
      </div>
      </div>
      <div className="FormRows">
      <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="recipient-phone">Phone Number:</label>
      <input className="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required />
      </div>
      <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="files">Add Files:</label>
      <input className="formSpace" type="file" id="files" name="files" />
      </div>
      </div>
      <div className="FormRows">
        <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="recipient-name">Recipients Full Name:</label>
      <input className="formSpace" type="text1" id="recipient-name" name="recipient-name" required />
      </div>
      <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="recipient-address">Full Address:</label>
      <input className="formSpace" type="text1" id="recipient-address" name="recipient-address" required />
      </div>
      </div>
      <div className="FormRows">
        <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="recipient-email">Email Address:</label>
      <input className="formSpace" type="email" id="recipient-email" name="recipient-email" required />
      </div>
      <div className="inputLabelContainer">
      <label className="formLabels" htmlFor="recipient-phone">Phone Number:</label>
      <input className="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required />
      </div>
      </div>
      <input className="formSubmit" type="submit" value="Submit" />
    </form>

<div className="footerPrintAndSendForm">
 
 <div className="socialIcons">
    <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" rel="noopener"><img src={Igb} alt="Instagram" className="social" width="66" /></a>
    <a href="https://api.whatsapp.com/send?phone=16474252986&text=Welcome to SenDo, talk to us for a Quote!" rel="noopener"><img src={Wab} alt="WhatsApp" className="social" width="66" /></a>
    <a href="mailto:gojosearias@gmail.com" rel="noopener"><img src={Emb} alt="Email" className="social" width="66" /></a>
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