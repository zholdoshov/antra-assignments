const baseURL = "http://localhost:8000/todos";

const getTodos = () => {
  return fetch(baseURL).then((res) => res.json());
};

const createTodo = (newTodo) => {
  return fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  }).then((res) => res.json());
};

const updateTodo = (id, updatedTitle) => {
  return fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: updatedTitle }),
  }).then((res) => res.json());
};

const deleteTodo = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export { getTodos, createTodo, updateTodo, deleteTodo };
