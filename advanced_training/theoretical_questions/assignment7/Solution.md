# Assignment 7 (Advanced Training)

## What is `useEffect`? What are the different behaviours of useEffect? What is dependency array?

1. `useEffect` is one of the common used hooks in React. We use `useEffect` if we want to do some operation during the mount and when we the update happened. It takes two argument callback function and array that is called dependency array (optional).
2. Behaviours of useEffect related to dependency array. If there is no dependency array `useEffect` will be triggered during `mounting` and `updating`. If dependency array is empty it will be triggered only during `mounting`. If dependency array is not empty it will be triggered only when any of the variables in dependency array changes.

## What is `useRef` and when do you use it?

`useRef` is one of the hooks in React that allow us to keep values between renders. It can be used to store a mutable value that doesn't cause a re-render when the value is updated. It only return one item which is object called current.

## How to reuse hook logic in React?

Sometimes we may use multiple hooks that does same thing. To write clean and organized code we can DRY principle. We can create our custom hook then use it as an template which makes our custom hook reusable.
