import React from 'react'
import { useState, Component } from 'react';

export default class Todo extends Component {

  constructor(props) {
    super(props);
  }
  
  state = {
    editValue: this.props.todo.title,
  }

  handleEditClick = () => {
    if (this.props.todo.isEditable) {
      this.props.updateTodoHandler(this.props.todo.id, this.state.editValue);
    } else {
      this.props.editTodoHandler(this.props.todo.id, this.state.editValue);
    }
  };

  render() {
    return (
      <div className='todo-item'>
          <input className='todo-title' value={this.state.editValue} onChange={(e) => this.setState({editValue: e.target.value})} disabled={!this.props.todo.isEditable} style={{backgroundColor: this.props.todo.isEditable ? 'white' : 'transparent', border: this.props.todo.isEditable ? '1px solid #000' : 'none'}}/>
          <button className='button todo--edit-btn' onClick={this.handleEditClick}>{this.props.todo.isEditable ? 'Save' : 'Edit'}</button>
          <button className='button todo--delete-btn' onClick={() => this.props.deleteHandler(this.props.todo.id)}>Delete</button>
      </div>
    )
  }
}
