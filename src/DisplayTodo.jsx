import React from 'react'
import TodoItem from './components/TodoItem'

const DisplayTodo = () => {
    let todoArr = ["Go to Market", "Plan for Vacations"];

    return (
        <>
            <h1>My Todos</h1>
            <div >

                {todoArr.map(item => 
                    <TodoItem desc={item} />
                )}

            </div>
        </>
    )
}

export default DisplayTodo
