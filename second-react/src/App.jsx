import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {
  // function handleClick(){
  //   alert("clicked on the button");
  // }
  // function addToFive(num){
  //   alert(num+5);
  // }
  return (
    <>
      <h2>React Core Concepts</h2>
      <Posts></Posts>
      {/* <Friends></Friends> */}
      {/* <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => addToFive(7)}>Click to Add</button> */}
    </>
  )
}

export default App
