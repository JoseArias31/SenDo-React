
import NavBar from "./NavBar";
import '../Styles/PrintAndSendForm.css'
import SendoLogoBlack from "../imgs/Sendo Logo black.png";

function PrintAndSendForm() {

return(

<div className="PrintAndSendFormContainer">
    <NavBar isHomePage={false} />
    <div className="logoContainer">
        <img id="logo" src={SendoLogoBlack} alt="Sendo Logo" />
      </div>
<form action="#" method="post" id="formSection">
      <label htmlFor="shipper-name">Shippers Full Name:</label>
      <input className="formSpace" type="text1" id="shipper-name" name="shipper-name" required />
      
      <label htmlFor="shipper-email">Email Address:</label>
      <input className="formSpace" type="email" id="shipper-email" name="shipper-email" required />

      <label htmlFor="recipient-phone">Phone Number:</label>
      <input className="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required />
      
      <label htmlFor="files">Add Files:</label>
      <input className="formSpace" type="file" id="files" name="files" />
      
      <label htmlFor="recipient-name">Recipients Full Name:</label>
      <input className="formSpace" type="text1" id="recipient-name" name="recipient-name" required />
      
      <label htmlFor="recipient-address">Full Address:</label>
      <input className="formSpace" type="text1" id="recipient-address" name="recipient-address" required />
      
      <label htmlFor="recipient-email">Email Address:</label>
      <input className="formSpace" type="email" id="recipient-email" name="recipient-email" required />
      
      <label htmlFor="recipient-phone">Phone Number:</label>
      <input className="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required />
      
      <input className="formSubmit" type="submit" value="Submit" />
    </form>

<div>
    <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" rel="noopener"><img src="Instagram White Logo.png" alt="Instagram" className="social" width="66" /></a>
    <a href="https://api.whatsapp.com/send?phone=16474252986&text=Welcome to SenDo, talk to us for a Quote!" rel="noopener"><img src="WhatsApp White logo.png" alt="WhatsApp" className="social" width="66" /></a>
    <a href="mailto:gojosearias@gmail.com" rel="noopener"><img src="Email white logo.png" alt="Email" className="social" width="66" /></a>
</div>

</div>
    
)

}

export default PrintAndSendForm;