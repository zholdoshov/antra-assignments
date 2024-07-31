import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodoValue) => {
    if (newTodoValue !== "") {
      const newTodos = [...todos, { title: newTodoValue }];
      setTodos(newTodos);
      console.log(newTodos);
    } else {
      alert("Invalid input!");
    }
  };

  const deleteHandler = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const flag = true;

  return (
    <div className="todo-container">
      <TodoForm addNewTodo={addNewTodo} />
      <h2>Todos:</h2>
      <hr className="hr" />
      {flag
        ? todos.map((todo, index) => {
            return (
              <Todo
                title={todo.title}
                deleteHandler={() => deleteHandler(index)}
                key={index}
              />
            );
          })
        : null}
    </div>
  );
}

function TodoForm({ addNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Todo title..."
        className="todo-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="button todo--add-btn"
        onClick={() => {
          addNewTodo(inputValue);
          clearInput();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
