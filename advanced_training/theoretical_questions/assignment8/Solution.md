# Assignment 8 (Advanced Training)

## What are some differences between class and functional components?

| Functional Components                                                                                                     | Class Components                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `functional components` are just a plain JavaScript functions that accept props and return JSX.                           | `class components` requre to extend from React.Component and create a render function that returns React element                                             |
| There is no render method in functional components and we cannot use React lifecycle methods.                             | In class component it's requred to have render method returning JSX. React lifecycle methods can be used(e.g., componentDidMount, componentDidUpdate, etc,.) |
| We can use hooks that makes functional components Stateful and we cannot use constructor within the functional components | Inside class component it requires different syntax to implement hooks and we can use constructor (if we don't declare it React create default constructor)  |
| It's recommended defining components as functions                                                                         | It's not recommended                                                                                                                                         |

## Explain what lifecycle is in a simple way. How do you manage it in class and functional components?

All React components goes through the series of stages (goes from creation to deletion):

- Component `mounts` when it's added to the screen.
- Component `updates` when it receives new state or props.
- Component `unmounts` when it's removed from the screen.

In **Class Component** we use methods like `componentDidMount` works only during mounting, `componentDidUpdate` works every time component updates, and `componentWillUnmount` works right before the component is removed.

In **Functional Components** we use `useEffect` hook to manage what happens at different stage. `useEffect` with empty array works like `componentDidMount`. `useEffect` with dependency array works like `componentDidUpdate`. `useEffect` with a return function for cleanup works like `componentWillUnmount`.

## Explain immutability in one sentence.

It means not changing the original data but creating a new version with the changes.
