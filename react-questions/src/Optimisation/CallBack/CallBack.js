import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const CallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, 'New Todo'])
    }, [todos])

    const increment = () => {
        console.log('increment')
        setCount((prev) => prev + 1)
    }

    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={increment}>
                Increment {count}
            </button>
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    )
}

export default CallBack