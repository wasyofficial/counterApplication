import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   const [counter, setCounter] = useState(100)   
    
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" /> 
        </a>
      </div>
      <h1>Counter App On React</h1>
      <h2>Value is:  {counter}</h2>
      <div className="card">      

        {/* Decrease Button */}
        <button onClick={() => setCounter(counter - 1) }>Descrease</button>


        {/* Decrease Button */}
        <button onClick = {() => setCounter(counter + 1)}>Increase </button>
      </div>
      <p className="read-the-docs">
        This Counter Is Created By Wasy.
      </p>
    </>
  )
}

export default App
