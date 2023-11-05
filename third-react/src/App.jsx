import './App.css'
import CustomNav from './Component/Custom/CustomNav'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import NavBar from './Component/Header/NavBar'

function App() {

  return (
    <>
      <CustomNav></CustomNav>
      {/* <NavBar></NavBar> */}
      {/* <h1 className='text-5xl font-bold text-center mt-10'>React Third App</h1> */}

      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
