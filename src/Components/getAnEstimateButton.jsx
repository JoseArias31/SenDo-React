import React from "react";
import calculator from '../imgs/calculator.png'
import '../Styles/getAnEstimate.css'
function GetAndEstimateBotton () {

return(

<div id="getAndEstimateBotton"><button onclick="openEstimateSection()" type="submit" id="getAnEstimate"><img id="calculator" alt="calculator logo" src={calculator} /><span className="spanFirstTest">Get an estimate</span></button></div>

)

}

export default GetAndEstimateBotton;