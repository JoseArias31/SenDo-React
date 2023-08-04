import React from "react";
import '../Styles/printAndSend.css'
import add from '../imgs/add.png'

import { Link } from "react-router-dom";
Link
function PrintAndSend () {
return(
<div className="printAndSendContainer">
<Link id="aForm" to="/print-and-send-form"><button type="submit" id="printAndSend"><img src={add} alt="add file logo" id="add" /><span className="spanFirstTestSingle">Print and Send!</span></button></Link>
</div>
)

}

export default PrintAndSend;