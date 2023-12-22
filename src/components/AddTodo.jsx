import React from 'react'
import './AddTodo.css'

const AddTodo = () => {
  return (
    <div className='addtodo-container'>
      <div>
      <input type="text" className='todo-input' name="todoinput" id="todoinput" placeholder='Add Todo Here' />
      <button className='add-todo-btn'>Add</button>
      </div>
    </div>
  )
}

export default AddTodo
