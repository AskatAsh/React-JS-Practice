import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton(){
  return (
    <button>Click Here</button>
  );
}
function Name(){
  const age = 25;
  return <h3>I am Askat. I am {age} years old.</h3>
}
function Student(){
  const std = {name: "Askat", Id: 123};
  return (
  <div>
    <p>Name: {std.name}</p>
    <p>ID: {std.Id}</p>
  </div>
  )
}

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Name></Name>
      <MyButton />
      <Student></Student>
    </>
  )
}

export default App
