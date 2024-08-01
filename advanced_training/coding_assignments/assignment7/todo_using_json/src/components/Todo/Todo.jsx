import React from 'react'
import { useState } from 'react';

export default function Todo({todo, deleteHandler, editTodoHandler, updateTodoHandler}) {
  const [editValue, setEditValue] = useState(todo.title);

  const handleEditClick = () => {
    if (todo.isEditable) {
      updateTodoHandler(todo.id, editValue);
    } else {
      editTodoHandler(todo.id, editValue);
    }
  };

  return (
    <div className='todo-item'>
        <input className='todo-title' value={editValue} onChange={(e) => setEditValue(e.target.value)} disabled={!todo.isEditable} style={{backgroundColor: todo.isEditable ? 'white' : 'transparent', border: todo.isEditable ? '1px solid #000' : 'none'}}/>
        <button className='button todo--edit-btn' onClick={handleEditClick}>{todo.isEditable ? 'Save' : 'Edit'}</button>
        <button className='button todo--delete-btn' onClick={() => deleteHandler(todo.id)}>Delete</button>
    </div>
  )
}
