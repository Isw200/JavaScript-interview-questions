import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {

    return (
        <div>
            {console.log('TODOS RENDING...')}
            <button onClick={addTodo}>
                Add Todo
            </button>
            {todos?.map((item, index) => {
                return <p key={index}>{item}</p>
            })}
        </div>
    )
}

export default memo(Todos)