import React from "react";
import NavBar from "./NavBar";

function PrintAndSendForm() {

return(

<div className="PrintAndSendFormContainer">
    <NavBar />
<form action="#" method="post" id="formSection">
      <label for="shipper-name">Shipper's Full Name:</label>
      <input class="formSpace" type="text1" id="shipper-name" name="shipper-name" required /><br />
      
      <label for="shipper-email">Email Address:</label>
      <input class="formSpace" type="email" id="shipper-email" name="shipper-email" required /><br />

      <label for="recipient-phone">Phone Number:</label>
      <input class="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required /><br />
      
      <label for="files">Add Files:</label>
      <input class="formSpace" type="file" id="files" name="files" /><br />
      
      <label for="recipient-name">Recipient's Full Name:</label>
      <input class="formSpace" type="text1" id="recipient-name" name="recipient-name" required /><br />
      
      <label for="recipient-address">Full Address:</label>
      <input class="formSpace" type="text1" id="recipient-address" name="recipient-address" required /><br />
      
      <label for="recipient-email">Email Address:</label>
      <input class="formSpace" type="email" id="recipient-email" name="recipient-email" required /><br />
      
      <label for="recipient-phone">Phone Number:</label>
      <input class="formSpace" type="tel" id="recipient-phone" name="recipient-phone" required /><br />
      
      <input class="formSubmit" type="submit" value="Submit" />
    </form>
</div>
    
)

}

export default PrintAndSendForm;