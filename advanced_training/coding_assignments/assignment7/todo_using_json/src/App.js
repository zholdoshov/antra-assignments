import "./App.css";
import { useEffect, useRef, useState } from "react";
import Todo from "./components/Todo/Todo";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./apis/APIs";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((fetchedTodos) => setTodos(fetchedTodos));
  }, []);

  const addNewTodo = (newTodoValue) => {
    if (newTodoValue !== "") {
      const newTodos = { title: newTodoValue };
      createTodo(newTodos).then((createdTodo) => {
        setTodos([...todos, createdTodo]);
      });
    } else {
      alert("Invalid input!");
    }
  };

  const deleteHandler = (id) => {
    deleteTodo(id).then(() => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      getTodos().then(() => {
        setTodos(newTodos);
      });
    });
  };

  const editTodoHandler = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, title: updatedTitle, isEditable: !todo.isEditable }
        : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodoHandler = (id, updatedTitle) => {
    updateTodo(id, updatedTitle).then(() => {
      getTodos().then((data) => {
        setTodos(data);
      });
    });
  };

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
                editTodoHandler={editTodoHandler}
                updateTodoHandler={updateTodoHandler}
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
