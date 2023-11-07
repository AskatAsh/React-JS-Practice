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
      <ReusableForm 
      formTitle={"Sign Up"} 
      submitBtnText={"Sign Up"} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm 
      formTitle={"Log In"} 
      submitBtnText={"Log In"} 
      handleSubmit={handleLogInSubmit}>
        <div>
          <h2>Log In</h2>
          <p>Please Log in to Enter</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
