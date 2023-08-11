

import './App.css';




import { Routes, Route } from "react-router-dom"
import { Home } from './Components/home.jsx'
import PrintAndSendForm from './Components/printAndSendForm.jsx'
import Services from './Components/Services.jsx';
import WhyUs from './Components/whyUs.jsx';
function App() {


  return (
    
    <>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/SecondPage" element={ <PrintAndSendForm /> } />
        <Route path="/Services" element={ <Services /> } />
        <Route path="/WhyUs" element={ <WhyUs /> } />
        {/* <Route path="/*" element={<NotFoundPage />} /> */}
        
    </Routes>
   
    
      </>
  );
}

export default App;

