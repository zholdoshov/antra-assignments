import React from 'react'

export default function Todo({todo, deleteHandler}) {
  return (
    <div className='todo-item'>
        <span className='todo-title'>{todo.title}</span>
        <button className='button todo--delete-btn' onClick={() => deleteHandler(todo.id)}>Delete</button>
    </div>
  )
}
