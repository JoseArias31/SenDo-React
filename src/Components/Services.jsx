import '../Styles/Services.css'
import NavBar from './NavBar';
import Igb from '../imgs/Instagram black.png'
import Wab from '../imgs/whatsapp icon black.png'
import Emb from '../imgs/Instagram black.png'
import SendoLogoBlack from "../imgs/Sendo Logo black.png";
function Services() {

  
return(

<div className="pageTwo">
<NavBar isHomePage={false} />
<div className="logoContainer">
        <img id="logo" src={SendoLogoBlack} alt="Sendo Logo" />
      </div>
<section id="services">
<h1 id="serviceTitle">Services</h1>
<div id="transform">

<ul id="services-list">
    <li className="listOfContent1">2 Sizes:</li>
  
    <ul> 
      <li className="listOfContent">Letter 8.5 x 11”</li>
      <li className="listOfContent">Legal  8.5 x  14”</li>
    </ul>
   
    <li className="listOfContent1">Documents:</li>
    
    <ol id="services-list">
      <li className="listOfContent">Contracts</li>
      <li className="listOfContent">Invoices</li>
      <li className="listOfContent">Business letters</li>
      <li className="listOfContent">Legal forms</li>
      <li className="listOfContent">Brochures</li>
      <li className="listOfContent">Flyers</li>
      <li className="listOfContent">Resumes</li>
      <li className="listOfContent">Certificates</li>
      <li className="listOfContent">Reports</li>
      <li className="listOfContent">Manuals</li>
      <li className="listOfContent">Proposals</li>
      <li className="listOfContent">Presentations</li>
      <li className="listOfContent">Newsletters</li>
      <li className="listOfContent">Marketing materials</li>
      <li className="listOfContent">Training materials</li>
      <li className="listOfContent">Technical drawings</li>
      <li className="listOfContent">Maps</li>
      <li className="listOfContent">Menus</li>
      <li className="listOfContent">Calendars</li>
      <li className="listOfContent">Event flyers</li>
    </ol>
  </ul>

</div>
    
</section>

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
    <p id="phoneNumber">647-425-2986</p>
</div>
    </div>
</div>

)


}

export default Services;

