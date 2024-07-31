# Assignment 5 (Advanced Training)

## What is `useState`?

Hooks are special functions in React. They help us to write more organized, clean, less and understandable code. `useState` is one of the important hooks in React. To manage data in React we use `useState`. It takes an argument where we can pass an initial value of the stateVariable and return an array consisting of stateVariable and a function that updates the stateVariable.

## What is props drilling and state lifting?

`props drilling` - it's a situation when we pass props from the top of the DOM tree to the below nodes of the tree.

`state lifting` - it's the opposite of `props drilling` where we pass state from the lower nodes to the top nodes of the DOM tree or to the other side of the DOM tree.

## What is the `key` attribute?

`key` is a special string attribute we need to include when creating lists of elements. Keys help us to identify which items have changed, added, or deleted. Keys should be unique and the best way to pick a key is to use IDs of the elements within the array. When we don't have IDs we can use indexes of the elements, but it's not recommended due to changing orders of the indexes.

## What is synthetic event?

Synthetic events in React are cross-browser wrappers around the browser's original event. Different browsers may have different event names, to create a uniform interface React uses this wrapper to make sure that events in different browsers execute consistently.

## What is virtual dom?

How rendering happens in React? React does rendering for us but it's important to know how it works. Because sometimes bad code causes infinite re-render which crashes our app. React uses Virtual DOM (a.k.a. `VDOM`) that knows when and how to render our application. It's a representation of the original DOM. When the update happens React creates a Virtual DOM and then compares (using a `diffing` algorithm) it with the previous Virtual DOM. React updates the original DOM, where changes happened only. The process that updates the real DOM is called `reconciliation`.
