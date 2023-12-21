import React from 'react'

const TodoItem = (props) => {
  return (
    <div style={{fontSize: '25px'}}>
      {props.desc}
    </div>
  )
}

export default TodoItem
