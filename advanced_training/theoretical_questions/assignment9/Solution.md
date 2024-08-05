# Assignment 9 (Advanced Training)

## How do you decide when to split a component into subcomponents?

First of all split a component into subcomponents when it becomes too large or too complex. Second, if we can reuse it in other places.

## What is the difference between state and props?

- State: It's a state inside the component and can change over time.
- Props: Passed to the component from outside and we cannot be changed by the component.

## How to trigger rerender in a component?

To trigger rerender in a component we can change the states or props of the component.

## Why do you like react over other front-end libraries and frameworks?

Because it's fast as Reactive. It uses Virtual DOM for better performance. It's easy to create interactive UIs.

## What’s the difference between controlled components and uncontrolled components?

- Controlled components: React controls the form data.
- Uncontrolled components: DOM controls the form data.

## How to prevent components from unnecessary rerendering?

Use `React.memo`, `shouldComponentUpdate`, or `PureComponent`.

## Why are props needed to be immutable?

Props should be immutable to keep components predictable and to avoid unexpected side effects.

## Explain the Virtual DOM and how React uses it to improve performance.

The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, then compares it to the real DOM and only updates the differences, which improves performance.

## Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?

- `useMemo`: Caches the result of a something to avoid doing it on every render.

- `useCallback`: Caches a function to avoid recreating it on every render.

## Explain the concept of Higher-Order Components (HOCs) and provide an example use case.

HOCs are functions that take a component and return a new component with additional props or behavior. It helps us reusing components logic.

## Discuss the differences between React's class components and functional components. Which one do you prefer and why?

- Class Components: Use `class` syntax, can use state and lifecycle methods.
- Functional Components: Use function syntax, use hooks to manage state and lifecycle.
- Preference: Functional components, because they are simpler and hooks make them powerful.

## How do you ensure your code is maintainable and scalable?

Write clean, modular code; use meaningful names; follow best practices; write tests; and don't forget to document the code.
