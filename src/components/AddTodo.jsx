import React, { useState, useContext } from 'react'
import './AddTodo.css'
import { MyContext } from '../MyContext';

const AddTodo = () => {

  const [todoInput, setTodoInput] = useState('');

  const [todoArr, setTodoArr] = useContext(MyContext);

  const addTodoInArray = () => {
    alert(todoInput);

    console.log(todoArr);
  }

  return (
    <div className='addtodo-container'>
      <div>
      <input type="text" className='todo-input' name="todoinput" id="todoinput" placeholder='Add Todo Here' value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
      <button className='add-todo-btn' onClick={() => addTodoInArray()}>Add</button>
      </div>
    </div>
  )
}

export default AddTodo
