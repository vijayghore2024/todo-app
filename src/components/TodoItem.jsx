import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  console.log(props);
  return (
    <div className='todo-item'>
        <div className="item-descr">{props.todo.todo.id}. {props.todo.todo.todoDesc}</div>
        <button className='item-btn'>Complete</button>
        <button className='item-btn'>Delete</button>
    </div>
  )
}

export default TodoItem
