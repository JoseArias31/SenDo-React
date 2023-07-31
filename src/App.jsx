import { useState } from 'react'
import NavBar from './Components/NavBar.jsx'
import './App.css'
import TrackForm from './Components/trackForm.jsx'
import GetAndEstimateBotton from './Components/getAnEstimateButton.jsx'
import PrintAndSend from './Components/printAndSendButton.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='pageOne'>
    {/* Navigation ba*/}
      <NavBar />
<div className='firstTextContainer'>
      <h1 className='h1FirstText'>Print and Send Documents, Anywhere!</h1>
      <p className='pFirstText'><u>Only in Canada</u></p>
</div>

    {/* Tracking Number Section*/}

<div className='TrackOrderContainer'>

<h2 className='h2FirstText'>Track your Order</h2>
<TrackForm />
</div>
<div className='buttonsContainer'>

<GetAndEstimateBotton />
<PrintAndSend />

</div>

</div>
    </>
  )
}

export default App
