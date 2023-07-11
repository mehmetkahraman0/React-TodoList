import React from 'react'
import { AiOutlineEdit, AiOutlineCloseCircle } from 'react-icons/ai';


const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className='todo'>
      <p className={`${task.completed ? "completed" : "todo-text"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <button className='todo-button-edit'><AiOutlineEdit className='edit-button' onClick={() => editTodo(task.id)} /></button>
        <button className='todo-button-task'><AiOutlineCloseCircle className='task-button' onClick={() => deleteTodo(task.id)} /></button>
      </div>
    </div>
  )
}

export default Todo
