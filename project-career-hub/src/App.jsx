import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      
      <h1 className='text-5xl font-bold'>Project Career Hub</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
