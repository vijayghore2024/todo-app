import React, { useState, useContext, useRef } from 'react'
import './AddTodo.css'
import { MyContext } from '../MyContext';

const AddTodo = () => {

  const { todoArr, setTodoArr } = useContext(MyContext);

  const [todoInput, setTodoInput] = useState('');

  const inpbox = useRef('');

  const addTodoInArray = () => {

    const todo = {
      id: (todoArr.length + 1),
      todoDesc: todoInput,
      status: false
    }

    // alert(todoInput);
    setTodoArr([...todoArr, {todo}]);
    setTodoInput('')
    inpbox.current.focus();
  }

  return (
    <div className='addtodo-container'>
      <div>
        <input type="text" className='todo-input' name="todoinput" id="todoinput" placeholder='Add Todo Here' value={todoInput} onChange={(e) => setTodoInput(e.target.value)} ref={inpbox} />

        <button className='add-todo-btn' onClick={() => addTodoInArray()}>Add</button>
      </div>
    </div>
  )
}

export default AddTodo
