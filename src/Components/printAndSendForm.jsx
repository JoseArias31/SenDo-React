
import NavBar from "./NavBar";

function PrintAndSendForm() {

return(

<div className="PrintAndSendFormContainer">
    <NavBar />
<form action="#" method="post" id="formSection">
      <label htmlFor="shipper-name">Shippers Full Name:</label>
      <input className="formSpace" type="text1" id="shipper-name" name="shipper-name" required /><br />
      
      <label htmlFor="shipper-email">Email Address:</label>
      <input className="formSpace" type="email" id="shipper-email" name="shipper-email" required /><br />

      <label htmlFor="recipient-phone">Phone Number:</label>
      <input className="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required /><br />
      
      <label htmlFor="files">Add Files:</label>
      <input className="formSpace" type="file" id="files" name="files" /><br />
      
      <label htmlFor="recipient-name">Recipients Full Name:</label>
      <input className="formSpace" type="text1" id="recipient-name" name="recipient-name" required /><br />
      
      <label htmlFor="recipient-address">Full Address:</label>
      <input className="formSpace" type="text1" id="recipient-address" name="recipient-address" required /><br />
      
      <label htmlFor="recipient-email">Email Address:</label>
      <input className="formSpace" type="email" id="recipient-email" name="recipient-email" required /><br />
      
      <label htmlFor="recipient-phone">Phone Number:</label>
      <input className="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required /><br />
      
      <input className="formSubmit" type="submit" value="Submit" />
    </form>
</div>
    
)

}

export default PrintAndSendForm;