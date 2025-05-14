import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setcounter]=useState(15)
  //let counter=15
const addvalue=()=>{
  counter=counter+1;
  setcounter(counter)
}
const removevalue=()=>{
  counter=counter-1;
  setcounter(counter)
}
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addvalue}>Add {counter} </button>
    <br/>
   <button
   onClick={removevalue}>Decrease value{counter}</button>
   <p>footer:{counter}</p>
   </>
  )
}

export default App
