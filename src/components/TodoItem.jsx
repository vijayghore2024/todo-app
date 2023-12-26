import React, { useState } from 'react'
import './TodoItem.css'

const TodoItem = (props) => {

  const [todoStatus, setTodoStatus] = useState(props.todo.todo.status);

  const toggleStatus = () => {

    if(todoStatus == true){
      if(window.confirm("Do you really want to mark it as incomplete?")){
        setTodoStatus(!todoStatus);
      }
    }
    else{
      setTodoStatus(!todoStatus);
    }
    
  }

  return (
    <div className={`todo-item ${todoStatus?'green': 'red'}` }>
        <div className="item-descr">{props.todo.todo.id}. {props.todo.todo.todoDesc}</div>
        <button className='item-btn' onClick={toggleStatus}>{ todoStatus? "Incomplete" : "Complete" }</button>
        <button className='item-btn'>Delete</button>
    </div>
  )
}

export default TodoItem
