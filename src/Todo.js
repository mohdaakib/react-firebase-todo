import React from 'react';
import "./Todo.css";

function Todo(props) {
  return (
    // we need to apply CSS on list elements
    <div className='todo__list'>
       <li>{props.text}</li> 
    </div>
  )
}

export default Todo;