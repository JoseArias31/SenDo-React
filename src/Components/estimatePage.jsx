

import calculator from '../imgs/calculator.png';
import '../Styles/getAnEstimate.css';
import ReactDOMServer from 'react-dom/server';
import { useState } from 'react';



const GetAndEstimateButton = () => {
  
  
  const [address, setAddress] = useState('')
  const [numPages, setNumPages] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  
  
  const handleInputChangeNumber = (event, setState) => {
    const inputValueRegexNum = /^[0-9]*$/;
    const { value } = event.target;

    if (inputValueRegexNum.test(value)) {
      setState(value);
    }
  };


  const handleClickEstimated = () => {
    const estimateWindow = window.open('', 'Get an Estimate', 'width=725,height=680');
   
   
   
  const handleSubmit = (event) => {
    event.preventDefault();
      alert(`The estimate price for your order is: $200 taxes incliude`);
  };

  


    const estimateForm = (
      <div>
        <form onSubmit={handleSubmit}  method="post">
        <section style={{ background: '#20262E', height: '100vh', margin: 0, padding: 0 }}>
          <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>GET AN ESTIMATE</h1>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '0' }}>
            <div style={{ border: '1px white solid', margin: '20px', paddingLeft: '10px', paddingRight: '10px' }} className="fromTo">
              <h2 style={{ color: 'white', fontSize: '25px' }}>From</h2>
              
                <h2 style={{ color: 'white', fontSize: '20px' }}>Address:</h2>
                
                  <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ width: '250px' }} type="text" id="postalCode" name="Postal Code" required />
              
              
              
                <h2 style={{ color: 'white', fontSize: '20px' }}>Country:</h2>
                <h3 style={{ color: 'white', fontSize: '20px' }}>Canada*</h3>
              </div>
          
            <div style={{ border: '1px white solid', margin: '20px', paddingLeft: '10px', paddingRight: '10px' }} className="fromTo">
              <h2 style={{ color: 'white', fontSize: '25px' }}>To</h2>
             
                <h2 style={{ color: 'white', fontSize: '20px' }}>Address:</h2>
                <input
                 value={address}
                 onChange={(e) => setAddress(e.target.value)}
                style={{ width: '250px' }} type="text" id="postalCode" name="Postal Code" required />
            
             
                <h2 style={{ color: 'white', fontSize: '20px' }}>Country:</h2>
                <h3 style={{ color: 'white', fontSize: '20px' }}>Canada*</h3>
            </div>
          </div>

          <div style={{ border: '1px solid white', marginLeft: '35px', marginRight: '35px', padding: '30px' }}>
            <h1 style={{ fontSize: '25px', color: 'white' }}>Info</h1>
            <label style={{ color: 'white', fontSize: '25px' }} htmlFor="total">Number of Pages:</label>
            <input 
             value={numPages}
             onChange={(e) => handleInputChangeNumber(e, setNumPages)}
            style={{ width: '100px', textAlign: 'center' }} type="number" id="number2" name="total" required /><br /><br />
            <label style={{ color: 'white', fontSize: '25px' }} htmlFor="email">Email:</label>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '215px' }} type="email" id="email" name="email" required /><br /><br />
            <label style={{ color: 'white', fontSize: '25px' }} htmlFor="phone">Phone Number:</label>
            <input
             value={number}
             onChange={(e) => handleInputChangeNumber(e, setNumber)}
            style={{ width: '125px', textAlign: 'center' }} type="number" id="phone" name="phone" required /><br /><br />
           
            <button type="submit" style={{ width: '200px', height: '40px', cursor: 'pointer', fontSize: '25px', position: 'relative', left: '33%' }}  id="getAnEstimate">
            <span className="spanFirstTest">Calculate</span>
      </button>
          </div>
        </section>
        </form>
      </div>
    );
    const estimateFormHtml = ReactDOMServer.renderToStaticMarkup(estimateForm);
    estimateWindow.document.body.innerHTML = estimateFormHtml;
  };

  return (
    <div id="getAndEstimateButton">
      <button onClick={handleClickEstimated} type="submit" id="getAnEstimate">
        <img id="calculator" alt="calculator logo" src={calculator} />
        <span className="spanFirstTest">Get an Estimate</span>
      </button>
    </div>
  );
};

export default GetAndEstimateButton;
