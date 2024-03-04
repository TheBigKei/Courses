import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    return (
      <>
      <h2>Count is {count}</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
            Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
            Decrement
        </button>
      </div>
      </>
    )
  }
  
  export default Counter