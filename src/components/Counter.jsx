import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    
    const incrementCount = () => {

        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>현재 Count: {count}</h1>
            <button onClick={decrementCount}>-</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Counter
