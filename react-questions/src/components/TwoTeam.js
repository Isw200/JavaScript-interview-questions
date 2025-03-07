import React, { useState } from 'react'

const TwoTeam = () => {
    const [input, setInput] = useState('')
    const [listA, setListA] = useState([])
    const [listB, setListB] = useState([])

    const addToListA = () => {
        setListA([...listA, input])
        setInput('')
    }

    const addToListB = (item) => {
        setListB([...listB, item])
    }

    const removeFromListB = (item) => {
        const filtered = listB.filter((name) => item !== name)
        setListB(filtered)
    }

    return (
        <div>
            <h1>Two Team</h1>

            <span>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addToListA}>Add</button>
            </span>

            <h2>Master Team</h2>
            {
                listA?.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>
                                {item}
                                {!listB.includes(item) &&
                                    <button onClick={() => addToListB(item)}>Add</button>
                                }
                                {listB.includes(item) &&
                                    <button onClick={() => removeFromListB(item)}>Remove</button>
                                }
                            </span>
                        </li>
                    )
                })
            }

            <h2>Playing 11</h2>
            {
                listB?.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })
            }

        </div>
    )
}

export default TwoTeam