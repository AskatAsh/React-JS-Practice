import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("clicked on the button");
  }
  function addToFive(num){
    alert(num+5);
  }
  return (
    <>
      <h2>React Core Concepts</h2>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => addToFive(7)}>Click to Add</button>
    </>
  )
}

export default App
