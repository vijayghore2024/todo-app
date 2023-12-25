import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'
import './TodoApp.css'

const TodoApp = () => {
  return (
    <div className='todoapp-container'>
        <AddTodo />
        <DisplayTodo />
    </div>
  )
}

export default TodoApp
