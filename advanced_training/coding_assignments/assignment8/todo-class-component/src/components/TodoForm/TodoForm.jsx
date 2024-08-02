import { React, Component } from "react";

class TodoForm extends Component {
    constructor(props) {
      super(props);
    }
  
    state = {
      inputValue: "",
    };
  
    handleInputChange = (e) => {
      this.setState({inputValue: e.target.value});
    };
  
    clearInput = () => {
      this.setState({inputValue: ""});
    };
  
    render() {
      return (
        <div className="todo-form">
          <input
            placeholder="Todo title..."
            className="todo-input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button
            className="button todo--add-btn"
            onClick={() => {
              this.props.addNewTodo(this.state.inputValue);
              this.clearInput();
            }}
          >
            Add
          </button>
        </div>
      );
    }
  }

  export default TodoForm;