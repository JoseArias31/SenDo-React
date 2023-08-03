import React from "react";
import calculator from '../imgs/calculator.png'
import '../Styles/getAnEstimate.css'



const EstimateForm = () => {
 
    const handleClickEstimated= () => {
      const estimateWindow = window.open('', 'Get an Estimate', 'width=725,height=680');
      const estimateForm = (
        "<div>" + "<section style='background: #20262E; height: 100vh; margin: 0; padding: 0;'>" + "<h1 style='color: white; text-align: center; padding-top: 20px;'>GET AN ESTIMATE</H1>" + 
    
    "<div style='display: flex; justify-content: space-around; margin-top: 0'>" + "<div style='border: 1px white solid; margin: 20px; padding-left: 10px; padding-right: 10px;' class='fromTo'>" +
     "<h2 style='color: white; font-size: 25px;'>From</h2>" + "<div>" + "<h2 style='color: white; font-size: 20px;'>Address:</h2>" + "<form>" + "<input style='width:250px;' type='text' id='postalCode' name='Postal Code' required>" + "</div>" + "<div>" + "<h2 style='color: white; font-size: 20px;'>Country:</h2>" + "<h3 style='color: white; font-size: 20px;'>Canada*</h3>" + "</div>" +
    "</div>" + "<div style='border: 1px white solid; margin: 20px; padding-left: 10px; padding-right: 10px;' class='fromTo'>" +
    "<h2 style='color: white; font-size: 25px;'>To</h2>" + "<div>" + "<h2 style='color: white; font-size: 20px;'>Address:</h2>" + "<input style='width:250px; type='text' id='postalCode' name='Postal Code' required>" + "</div>" + "<div>" +"<h2 style='color: white; font-size: 20px;'>Country:</h2>" + "<h3 style='color: white; font-size: 20px;'>Canada*</h3>" + "</div>" +
    "</div>" + "</div>" + "<div style='border: 1px solid white; margin-left: 35px; margin-right: 35px; padding: 30px;'>" + "<h1 style='font-size: 25px; color: white;'>Info</h1>" +
      "<label style='color:white; font-size: 25px;' for='total'>Number of Pages:</label>" +
      "<input style='width:100px; text-align: center;' type='number' id='number2' name='total' required><br><br>" +
      "<label style='color:white; font-size: 25px;' for='email'>Email:</label>" +
      "<input style='width: 215px;'type='email' id='email' name='email' required><br><br>" +
      "<label style='color:white; font-size: 25px;' for='phone'>Phone Number:</label>" +
      "<input style='width:125px; text-align: center; type='phone' id='phone' name='phone' required><br><br>" +
      "<input type='submit' value='Submit' style='width: 200px; height: 40px; cursor: pointer; font-size: 25px; position: relative; left: 33%;' onclick='calculate()'><b>Calculate</b>>" +
      "</div>" + "</form>" + "</section>" + "</div>");
    estimateWindow.document.body.innerHTML = estimateForm;
    
     
    };
  
    return (
        <div id="getAndEstimateBotton"><button onClick={handleClickEstimated} type="submit" id="getAnEstimate"><img id="calculator" alt="calculator logo" src={calculator} /><span className="spanFirstTest">Get an Estimate</span></button></div>
    );
  };
  
  export default EstimateForm;