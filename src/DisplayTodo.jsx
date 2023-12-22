import React from 'react'
import TodoItem from './components/TodoItem'
import './components/DisplayTodo.css'

const DisplayTodo = () => {
    let todoArr = ["Go to Market", "Plan for Vacations", "Study React", "Use Mobile Phone", "Repair Laptop"];

    return (
        <div className='displaytodo-container'>
            <h1>My Todos</h1>
            <div className='todo-items'>

                {todoArr.map(item => 
                    <TodoItem desc={item} />
                )}

            </div>
        </div>
    )
}

export default DisplayTodo
