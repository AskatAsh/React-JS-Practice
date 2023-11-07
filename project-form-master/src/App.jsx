import './App.css'
import ReusableForm from './Component/ReusableForm/ReusableForm'
// import HookForm from './Component/HookForm/HookForm'
// import RefForm from './Component/RefForm/RefForm'
// import StatefullForm from './Component/StatefullForm/StatefullForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'
function App() {

  const handleSignUpSubmit = data => {
    // e.preventDefault();
    console.log("Sign Up data: ", data);
  }

  const handleLogInSubmit = data => {
    // e.preventDefault();
    console.log("Log In data: ", data);
  }

  return (
    <>
      <h1>Simple React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"} submitBtnText={"Sign Up"} handleSubmit={handleSignUpSubmit}></ReusableForm>
      <ReusableForm formTitle={"Log In"} submitBtnText={"Log In"} handleSubmit={handleLogInSubmit}></ReusableForm>
    </>
  )
}

export default App
