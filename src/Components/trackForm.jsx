import React, { useState } from "react";
import RightArrow from '../imgs/Right Arrow.png'
import '../Styles/trackForm.css'

function TrackForm () {

const [inputValue, setInputValue] = useState('');

const HandleInputChange = (event) => {
  
  const inputValueRegex = /^[0-9]*$/;
  const { value } = event.target;
 
  if(inputValueRegex.test(value)) {
  setInputValue(value); 
  
}
};

const handleSubmit = (event) => {

event.preventDefault();

}

const handleClick = () => {


}



return(

<form id="firstBottoms" onSubmit={handleSubmit}>
        <label for="nombre"></label>
        <input pattern="[0-9]*" value={inputValue} onChange={HandleInputChange} type="text" id="trackBar" name="nombre" placeholder="Enter your order number 0000000000" required />
      
      <button onClick={handleClick} type="submit" id="trackButton"><img id="rightArrow" alt="Right arrow logo" src={RightArrow} /></button>
      </form>
)
};

export default TrackForm;