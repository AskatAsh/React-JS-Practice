import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    // console.log(abc);
    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    return (
        <div style={{border: '2px solid #fff'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}