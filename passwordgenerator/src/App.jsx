import { useState, useCallback, useEffect} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [email, setemail] = useState("")
  const [passWord, setpassWord] = useState("")

 

  const emailGenerator = useCallback(() => {
    let mail = ""
    let halfMail = ""
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      mail += str.charAt(char)
    }
    for (let i = 1; i <= length/2; i++) {
      halfMail += mail.substring(i/2, i)
      }
      if(length == 10) password += halfMail.substring(6,  halfMail.length)
    else if(10>length && length>7) password +=  halfMail.substring(3,  halfMail.length)
    else password += halfMail.substring(1,  halfMail.length)
 
    setemail(mail)
    setpassWord(password)

  }, [length, numberAllowed, setemail])

  useEffect(() => {
    emailGenerator()
  }, [length, numberAllowed, emailGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 absolute item-center justify-center">
      <h1 className='text-white text-center my-3'>Email generator</h1><br/>
      <div>
      <h2 className='text-white text-center mb-2'>Generated Mail</h2>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={email+"@gmail.com"}
            className="border-white border-2 w-full py-1 px-3 rounded-2xl"
            placeholder="email"
            readOnly
        /></div><br/>
      <div> <h2 className='text-white text-center mb-2'>Generated password</h2>
        <input
            type="text"
            value={passWord+"$$"}
            className="border-white border-2 w-full py-1 px-3 rounded-2xl mb-3"
            placeholder="password"
            readOnly
        /></div> 
        
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
          <label className='mx-2'>Length: {length}</label>
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