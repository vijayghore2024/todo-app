import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import './DisplayTodo.css'
import { MyContext } from '../MyContext'

const DisplayTodo = () => {
    const { todoArr, setTodoArr } = useContext(MyContext);

    // let todoArr = ["Go to Market", "Plan for Vacations", "Study React", "Use Mobile Phone", "Repair Laptop"];

    return (
        <div className='displaytodo-container'>
            <h1>My Todos</h1>
            <div className='todo-items'>

                {
                    (todoArr.length === 0)?"No Todos to Display": ""
                }
                {todoArr.map(item =>
                    <TodoItem todo={item} />
                )}

            </div>
        </div>
    )
}

export default DisplayTodo
