import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";

// TODO: Mock the fetch API, and do reset and clean up
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { userId: 1, id: 1, title: "todo 1", completed: false },
          { userId: 1, id: 2, title: "todo 2", completed: false },
          { userId: 1, id: 3, title: "todo 3", completed: false },
          { userId: 1, id: 4, title: "todo 4", completed: true },
          { userId: 1, id: 5, title: "todo 5", completed: false },
        ]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

// TODO: Test component to render correctly with the fetched data
test("renders fetched todos on mount", async () => {
  render(<TodoList />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("todo 1")).toBeInTheDocument();
  });
});

// TODO: Test component to handle API fetch failure and display error message
test("handles API fetch failure", async () => {
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error("Failed to fetch"))
  );

  render(<TodoList />);

  await waitFor(() => {
    expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
  });
});

// TODO: Test adding a new todo
test("adds a new todo item", async () => {
  render(<TodoList />);

  await waitFor(() => {
    expect(screen.getByText("todo 1")).toBeInTheDocument();
  });

  fireEvent.change(screen.getByPlaceholderText("Enter todo"), {
    target: { value: "todo 10" },
  });
  fireEvent.click(screen.getByText("Add Todo"));

  expect(screen.getByText("todo 10")).toBeInTheDocument();
});

// TODO: Test removing a todo
test("removes a todo item", async () => {
  render(<TodoList />);

  await waitFor(() => {
    expect(screen.getByText("todo 1")).toBeInTheDocument();
  });

  fireEvent.click(screen.getAllByText("Remove")[0]);

  expect(screen.queryByText("todo 10")).not.toBeInTheDocument();
});
