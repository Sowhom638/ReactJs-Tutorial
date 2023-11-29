import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [email, setemail] = useState("")

  //useRef hook
  const emailRef = useRef(null)

  const emailGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setemail(pass)


  }, [length, numberAllowed, setemail])

  const copyemailToClipboard = useCallback(() => {
    emailRef.current?.select();
    emailRef.current?.setSelectionRange(0, 0);
    window.navigator.clipboard.writeText(email)
  }, [email])

  useEffect(() => {
    emailGenerator()
  }, [length, numberAllowed, emailGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Email generator</h1><br/>
      <h2>choose the before part of 'gmail.com' as password</h2>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={email+"@gmail.com"}
            className="outline-none w-full py-1 px-3"
            placeholder="email"
            readOnly
            ref={emailRef}
        />
        <button
        onClick={copyemailToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={10}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
     </div>
    </div>
</div>
    
  )
}

export default App