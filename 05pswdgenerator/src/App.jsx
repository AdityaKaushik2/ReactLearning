import { useCallback, useState, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789";
    let specialChars = "@#$%^&*(){}[].~_-+=";
  
    // if numberAllowed is true then add at least one number to the password
    if (numberAllowed) {
      pass = pass + numbers[Math.floor(Math.random()*numbers.length)];
      str = str + numbers;
    }
    // if characterAllowed is true then add at least one special character to the password
    if (characterAllowed) {
      pass = pass + specialChars[Math.floor(Math.random()*specialChars.length)]
      str = str + specialChars;
    }


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass = pass + str.charAt(char);      
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])
// useCallBack is used to prevent the function from being recreated on every render and only when the dependencies change. (It keeps function in memory and only creates a new one when the dependencies change.)
  

  const copyPasswordToClipboard = useCallback(()=>{

    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,40);
    /*
    * This line of code is using the optional chaining operator (?.) in JavaScript to call the select method on passwordRef.current. passwordRef is likely a reference to a DOM input element created by the React.useRef() hook. The select method selects the text of a text field. If passwordRef.current is null or undefined, it will not attempt to call select() and will instead return undefined, preventing potential runtime errors.
     */
    window.navigator.clipboard.writeText(password)
    /*
    * in window we get a navigator object which has a clipboard object which has a writeText method that takes a string as an argument and copies it to the clipboard  
    */
     
  },[password]) 
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])
return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center '>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-2 rounded-lg cursor-pointer hover:bg-orange-500'
        >copy</button>
      </div> 
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 mr-2'>
        <input 
        type="range"
        min={8}
        max={40}
        value={length}
        className='cursor-pointer' 
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1 mr-2'>
        <input 
        type='checkbox'
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 mr-2'>
        <input 
        type='checkbox'
        defaultChecked={characterAllowed}
        id="characterInput"
        onChange={()=>{
          setCharacterAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
    </div>
    </>
  )
}

export default App
