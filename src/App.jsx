

import './App.css';




import { Routes, Route } from "react-router-dom"
import { Prueba } from './Components/printAndSendButton.jsx'
import PrintAndSendForm from './Components/printAndSendForm.jsx'
 
function App() {
 

  return (
    
    <>
    <Routes>
        <Route path="/" element={ <Prueba/> } />
        <Route path="/SecondPage" element={ <PrintAndSendForm /> } />
        {/* <Route path="/*" element={<NotFoundPage />} /> */}
        
    </Routes>
   
    
      </>
  );
}

export default App;

