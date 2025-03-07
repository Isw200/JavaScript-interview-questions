import React from 'react'

const DeBounce = () => {
    const deBouncer = (func, delay) => {
        let timer;

        return (...args) => {
            clearTimeout(timer)
            setTimeout(() => {
                func(...args)
            }, delay)
        }
    }

    const inputLogger = (e) => {
        console.log(e.target.value)
    }

    const onDeBounceChange = deBouncer(inputLogger, 1000)

    return (
        <div>
            <h1>De-Bouncer</h1>
            <input onChange={onDeBounceChange} />
        </div>
    )
}

export default DeBounce