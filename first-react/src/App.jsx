import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button className='btn'>Click Here</button>
  );
}
function Name() {
  const age = 25;
  return <h3>I am Askat. I am {age} years old.</h3>
}
function Student() {
  const stdStyles = {
    border: '2px solid #fff',
    borderRadius: '8px',
    padding: '15px',
    marginTop: '20px',
    backgroundColor: '#101010'
  }
  const std = { name: "Askat", Id: 123 };
  return (
    <div style={stdStyles}>
      <p>Name: {std.name}</p>
      <p>ID: {std.Id}</p>
    </div>
  )
}

function Device(props) {
  return <h4>Device Name: {props.deviceName}, Color: {props.color}</h4>
}

function UserData({userName, email}) {
  return (
    <div>
      <p>User Name: {userName}</p>
      <p>Email: {email}</p>
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
      <Device deviceName="Mobile" color="Green"></Device>
      <Device deviceName="Laptop" color="Silver"></Device>
      <UserData userName="Askat" email="abc@example.com"></UserData>
    </>
  )
}

export default App
