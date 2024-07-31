import React from 'react'

export default function Todo({title, deleteHandler}) {
  return (
    <div className='todo-item'>
        <span className='todo-title'>{title}</span>
        <button className='button todo--delete-btn' onClick={deleteHandler}>Delete</button>
    </div>
  )
}
