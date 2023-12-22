import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
        <div className="item-descr">{props.desc}</div>
        <button className='item-btn'>Complete</button>
        <button className='item-btn'>Delete</button>
    </div>
  )
}

export default TodoItem
