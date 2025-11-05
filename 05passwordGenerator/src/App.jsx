import { useCallback, useEffect, useState, useRef, use } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [characters, setcharacters] = useState(false)
  const [password, setpassword] = useState("")

 //useRef for input field can also be used for copying the password to clipboard
 const inputRef = useRef(null)

 // Password Generation Logic using useCallback
  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(characters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=" 
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, number, characters, setpassword]) 

  const copyPasswordToClipboard = useCallback(() => {
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 99999 ); // For mobile devices
    window.navigator.clipboard.writeText(password)
  },[password])
 
 // Generate password on initial render and when dependencies change using useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, number, characters, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadpw-md rounded-lg px-4 my-20 py-10 text-white bg-black/30 backdrop-blur-lg'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          readOnly
          className='w-full bg-white/20 text-white px-4 py-2 outline-none'
          placeholder='Generate Password'
          ref={inputRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 px-4 py-2 hover:bg-blue-700 transition-colors shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 mb-4'>
          <div className='flex items-center gap-x-2'>
            <input type='range' min={8} max={32} value={length}  className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
            <label className='select-none'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type='checkbox' defaultChecked={number} onChange={()=>{setnumber((prev)=>!prev)}}/>
            <label className='select-none'>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type='checkbox' defaultChecked={characters} onChange={(e)=>{setcharacters(e.target.checked)}}/>
            <label className='select-none'>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default App
