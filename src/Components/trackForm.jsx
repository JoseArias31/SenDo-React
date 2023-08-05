import  { useState } from "react";
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

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const trackingNumber = inputValue;

  if(trackingNumber.length === 10){
  return alert(`Your documents are on their way! ETA= ${randomNumber} days. Thank you for using SenDo Services.`)
  } else {
return alert("Please, enter a tracking number of ten (10) digits.")
  }
}

return(

<form id="firstBottoms" onSubmit={handleSubmit}>
        <label htmlFor="nombre"></label>
        <input pattern="[0-9]*" value={inputValue} onChange={HandleInputChange} type="text" id="trackBar" name="nombre" placeholder="Enter your order number 0000000000" required />
      
      <button onClick={handleClick} type="submit" id="trackButton"><img id="rightArrow" alt="Right arrow logo" src={RightArrow} /></button>
      </form>
)
}

export default TrackForm;