import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className='bg-white rounded-3xl flex flex-wrap gap-5 absolute bottom-8 left-5 px-3 py-2 text-white justify-center items-center'>
           <button 
           onClick={() => setcolor("red")}
           className='rounded-2xl p-3 border-black border-r-2 border-b-2' style={{backgroundColor:"red"}}>red</button>
           <button
           onClick={() => setcolor("green")}
           className='rounded-2xl p-3  border-black border-r-2 border-b-2' style={{backgroundColor:"green"}}>green</button>
           <button
           onClick={() => setcolor("blue")}
           className='rounded-2xl p-3  border-black border-r-2 border-b-2' style={{backgroundColor:"blue"}}>blue</button>
      </div>
      </div>
    </>
  )
}

export default App
