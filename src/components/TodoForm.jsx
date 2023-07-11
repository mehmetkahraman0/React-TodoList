import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value){
            addTodo(value);
            setValue('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='What is your plan today' value={value} onChange={e => setValue(e.target.value)}  />
      <button className='todo-form-button' type='submit'>Add Todo</button>
    </form>
  )
}

export default TodoForm
