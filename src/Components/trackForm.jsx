import React from "react";
import RightArrow from '../imgs/Right Arrow.png'
import '../Styles/trackForm.css'
function TrackForm () {
return(

<form id="firstBottoms">
        <label for="nombre"></label>
        <input  type="text" id="trackBar" name="nombre" placeholder="Enter your order number 000-00-000-00" required />
      
      <button type="submit" id="trackButton"><img id="rightArrow" alt="Right arrow logo" src={RightArrow} /></button>
      </form>
)
};

export default TrackForm;