# Assignment 6 (Advanced Training)

## What is `useState`?

Hooks are special functions in React that help us write organized, clean, and understandable code. `useState` is one of the important hooks in React. To manage data in React, we use `useState`. It takes an argument where we can pass an initial value of the state variable, and it returns an array consisting of the state variable and a function that updates the state variable.

## What is props drilling and state lifting?

`props drilling` is a situation where we pass props from the top of the React component tree all the way down to the nodes below in the tree.

`state lifting` is the opposite of `props drilling`. In state lifting, we pass state from the lower nodes up to the top nodes of the React component tree or to other parts of the React component tree.

## What is the `key` attribute?

`key` is a special string attribute that we need to include when creating lists of elements. Keys help us identify which items have changed, been added, or been deleted. Keys should be unique, and the best way to pick a key is to use the IDs of the elements within the array. When we don't have IDs, we can use the indexes of the elements, but this is not recommended due to the potential for changing orders of the indexes.

## What is synthetic event?

Synthetic events in React are cross-browser wrappers around the browser's original events. Different browsers may have different event names, so to create a uniform interface, React uses this wrapper to ensure that events in different browsers execute consistently.

## What is virtual dom?

React uses a Virtual DOM (a.k.a. `VDOM`) that knows when and how to render our application. It's a representation of the original DOM. When an update happens, React creates a Virtual DOM and then compares it (using a `diffing` algorithm) with the previous Virtual DOM. React updates the original DOM only where changes occurred. The process that updates the real DOM is called `reconciliation`.
