import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from '../Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <div className='bg-yellow-500 rounded-xl text-blue-700 p-3 mb-5'>Showing Some props</div>
      <Cards userName="Sowhom" Age={21} />
      <Cards userName="Tridib" Age={19} Address='22/24'/>
  </>
  )
}

export default App
