import './App.css'
import CustomNav from './Component/Custom/CustomNav'
import LineChart from './Component/LineChart/LineChart'
import Phone from './Component/Phone/Phone'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import NavBar from './Component/Header/NavBar'

function App() {

  return (
    <>
      <CustomNav></CustomNav>
      {/* <NavBar></NavBar> */}
      {/* <h1 className='text-5xl font-bold text-center mt-10'>React Third App</h1> */}

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phone></Phone>
    </>
  )
}

export default App
