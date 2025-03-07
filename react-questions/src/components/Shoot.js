import React from 'react'

const Shoot = () => {
    const deBouncer = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            setTimeout(() => {
                func(...args)
            }, delay)
        }
    }

    const handeleShoot = (e) => {
        console.log(e.target.value);
    }

    const debounceChange = deBouncer(handeleShoot, 1000)

    return (
        <div>
            <input onChange={debounceChange} />
        </div>
    )
}

export default Shoot