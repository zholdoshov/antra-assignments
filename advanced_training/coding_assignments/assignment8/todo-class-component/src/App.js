import { Component } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./apis/APIs";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    getTodos().then((fetchedTodos) => this.setState({ todos: fetchedTodos }));
  }

  addNewTodo = (newTodoValue) => {
    if (newTodoValue !== "") {
      const newTodos = { title: newTodoValue };
      createTodo(newTodos).then((createdTodo) => {
        this.setState({ todos: [...this.state.todos, createdTodo] });
      });
    } else {
      alert("Invalid input!");
    }
  };

  deleteHandler = (id) => {
    deleteTodo(id).then(() => {
      const newTodos = this.state.todos.filter((todo) => todo.id !== id);
      getTodos().then(() => {
        this.setState({ todos: newTodos });
      });
    });
  };

  editTodoHandler = (id, updatedTitle) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id
        ? { ...todo, title: updatedTitle, isEditable: !todo.isEditable }
        : todo
    );
    this.setState({ todos: updatedTodos });
  };

  updateTodoHandler = (id, updatedTitle) => {
    updateTodo(id, updatedTitle).then(() => {
      getTodos().then((data) => {
        this.setState({ todos: data });
      });
    });
  };

  render() {
    const flag = true;

    return (
      <div className="todo-container">
        <TodoForm addNewTodo={this.addNewTodo} />
        <h2>Todos:</h2>
        <hr className="hr" />
        {flag
          ? this.state.todos.map((todo) => {
              return (
                <Todo
                  todo={todo}
                  deleteHandler={() => this.deleteHandler(todo.id)}
                  editTodoHandler={this.editTodoHandler}
                  updateTodoHandler={this.updateTodoHandler}
                  key={todo.id}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
