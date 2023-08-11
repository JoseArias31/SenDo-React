import '../Styles/whyUs.css'
import NavBar from './NavBar';
import SendoLogoWhite from "../imgs/Sendo Logo white.png";
import Igb from '../imgs/Instagram black.png'
import Wab from '../imgs/whatsapp icon black.png'
import Emb from '../imgs/Instagram black.png'
function WhyUs() {
return (


    <section id="why-us">
      <NavBar isHomePage={true} />
  <h1 id="whyUsText">Why Us?</h1>
  <div className="logoContainer">
        <img id="logo" src={SendoLogoWhite} alt="Sendo Logo" />
      </div>
  <p id="text1" className="paragraph">At <b>SenDo</b>, we understand the importance of timely and efficient document management.<br />

 
    That iss why we offer a one-stop solution for all your printing and sending needs. With our advanced printing technology and reliable delivery services, you can trust us to handle all your important documents with care. Whether you need to print, sign, and send contracts, invoices, or any other business-critical documents, we have got you covered. </p>

  <p id="text2" className="paragraph">With 24/7 customer support, you can be confident that we will be there every step of the way to make sure your documents get where they need to go, when they need to get there.  </p>

  <p id="text3" className="paragraph">Choose <b>SenDo</b> for the peace of mind that comes with knowing your documents are in good hands. </p>
  <div className="footerWhyUs">
 
 <div className="socialIcons">
    <a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" rel="noopener"><img src={Igb} alt="Instagram" className="social2" width="55" /></a>
    <a href="https://api.whatsapp.com/send?phone=16474252986&text=Welcome to SenDo, talk to us for a Quote!" rel="noopener"><img src={Wab} alt="WhatsApp" className="social2" width="55" /></a>
    <a href="mailto:gojosearias@gmail.com" rel="noopener"><img src={Emb} alt="Email" className="social2" width="55" /></a>
 </div>
<div className="copyRight">
<p id="copyRightHome">SenDo© - 2023 - All Rights Reserved</p>
</div>
<div className="phoneNumber">
    <p id="phoneNumberHome">647-425-2986</p>
</div>
    </div>
</section>

)

}

export default WhyUs;