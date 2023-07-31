import React from "react";
import '../Styles/printAndSend.css'
import add from '../imgs/add.png'
function PrintAndSend () {
return(
<div className="printAndSendContainer">
<a id="aForm" href="form.html"><button type="submit" id="printAndSend"><img src={add} alt="add file logo" id="add" /><span className="spanFirstTestSingle">Print and Send!</span></button></a>
</div>
)

}

export default PrintAndSend;