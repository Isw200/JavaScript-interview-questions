import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    const startTimer = () => {
        setInterval(() => {
            // This is not working because the callback is still refers to the old value of count
            // const newCount = count + 1;
            // setCount(newCount)

            // correct
            setCount((prev) => {
                return prev + 1
            })
        }, 500)
    }

    return (
        <div>
            <h1>Count</h1>
            <h4>{count}</h4>
            <button onClick={startTimer}>
                Start
            </button>
        </div>
    )
}

export default Count