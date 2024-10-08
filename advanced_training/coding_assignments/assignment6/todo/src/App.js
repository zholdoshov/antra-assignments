import "./App.css";
import { useEffect, useRef, useState } from "react";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodoValue) => {
    if (newTodoValue !== "") {
      const newTodos = [
        ...todos,
        { id: todos.length + 1, title: newTodoValue },
      ];
      setTodos(newTodos);
    } else {
      alert("Invalid input!");
    }
  };

  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(temp);
  //   }, 1000);
  //   console.log("todos changed");
  // }, [temp]);

  const flag = true;

  return (
    <div className="todo-container">
      <TodoForm addNewTodo={addNewTodo} />
      <h2>Todos:</h2>
      <hr className="hr" />
      {flag
        ? todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                deleteHandler={() => deleteHandler(todo.id)}
                key={todo.id}
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
