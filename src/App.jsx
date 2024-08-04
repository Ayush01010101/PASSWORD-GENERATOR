import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [special,setspecial]=useState(false);

  const [number,setnumber]=useState(false)

  const [password,setpassword]=useState("")

  const [copyornot,setcopyornot]=useState("COPY")



  const copytocilpboard=()=>{
    copypassword.current?.select()
    window.navigator.clipboard.writeText(password)


    setcopyornot("COPIED")
    
    
  

  }


  // hooks

  // password generator
  let generator=useCallback((()=>{
    let pass="";
    let text="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number==true) text+="1234567890";
    if(special==true) text+="`~!@#$%^&*()-_=+[{]}\\|;:"

    for(let i=0;i<length;i++){
      let total_password=Math.floor(Math.random() * text.length +1);
      pass+=text.charAt(total_password)

      
      
      


    }
    setpassword(pass)

   

  }),[length,special,number])

 useEffect(()=>{
    generator();
    

 },[length,special,number,copyornot])


 let copypassword=useRef(null);

  return (
    <>
      <div className="div h-screen w-screen bg-gray-800 flex items-center justify-center">

          <div className="container bg-gray-500 mx-auto  h-40 w-fit  rounded-2xl flex flex-col items-center gap-4  md:p-0 hover:shadow-slate-700 hover:shadow-2xl">
            <div className="text text-white text-center text-3xl">
              <h1 className='font-bold'>Password Generator</h1>
            </div>
            <div className="input w-[70%] flex justify-center items-center">
              <input className='overflow-auto w-[70%] h-10 rounded-2xl p-1 outline-none' type="text" ref={copypassword} placeholder='password' value={password} readOnly />
              
              <button className=' bg-blue-500 p-2 rounded-2xl cursor-pointer font-bold hover:shadow-black hover:shadow-lg'  onClick={copytocilpboard}>{copyornot}</button>
            </div>

            <div className="options text-white flex gap-7">


              <div className="range space-x-3 border flex-col items-center justify-center">
                <input className='w-24 cursor-pointer' type="range" min={8} max={22} value={length} onChange={(e)=>{setlength(e.target.value)}} />
                <label >Length : {length}</label>
              </div>

              <div className="one">

                <input type="checkbox" value={special} defaultChecked={special} onChange={()=>{setspecial((e)=>!e)}}  />
                <label >Special Characters</label>

              </div>


                <div className="two">

                <input  type="checkbox" value={number} onChange={()=>{setnumber((e)=>!e)}}  />
                <label >Number</label>


                </div>
            </div>

          </div>


      </div>


    </>
  )
}

export default App
