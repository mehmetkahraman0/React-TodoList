import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value){
            editTodo(value, task.id);
            setValue('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='What is your plan today' value={value} onChange={e => setValue(e.target.value)}  />
      <button className='edit-todo-form-button' type='submit'>Edit Todo</button>
    </form>
  )
}

export default EditTodoForm
