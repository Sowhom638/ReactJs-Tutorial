"use client"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setcount] = useState(0);
  let increaseValue = () => {
     if(count < 20)
    setcount(count + 1);
  }

  let DecreaseValue = () => {
    if(count > 0)
   setcount(count - 1);
 }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Count value: {count}</h3>
      <h3>Muliple value showeing for testing: {count}</h3>
      <button onClick={increaseValue}>Increase Value</button><br/><br/>
      <button onClick={DecreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
