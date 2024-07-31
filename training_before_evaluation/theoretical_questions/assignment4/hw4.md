# Homework 4

## 1. What is the difference between instance methods and static methods?

**Instance Methods** - These are functions that only available for an instances of a class and only belongs to them. They can access and modify properties of the instance.

> `const promise = new Promise()` <br> `promise.then((val) => { console.log(val)}); // then() called on an instance of the class`

**Static Methods** - These are functions that only belon to the class itself, not to instance. They can't access or modify instance properties, they can only access other static methods and properties.

> `const promise = Promise.resolve(1) // resolve() is a static method, called on the class itself`

## 2. How does Javascript handle concurrency?

Javascript is a single thread programming language which means we can only executeone piece of code at a time. In Javascript we can acheive concurrency using the following mechanisms or use asynchronous programming:

**Event Loop** - It's a core mechanism in Javacript that enables asynchronous operations. This allows Javascript to handle non-blocking operations without freezing, keeping application responsible even while waiting for data or other oprations.

**Call Stack** - Keep track of what beaing executed currently.

**Web Apis** - setTimeout, ajax request, DOM(document) these are concurrent operations that are provided by Javascript in browser.

**Callback queue** - maintain the asynchronous callbacks, push callbacks to `callstack` if the `callstack` is empty.

## 3. What is async/await? How does it differ from using the promise instance methods?

**async/await** - it's a sugar syntax that build on top of Promises, making it more synchronous looking code while writing asynchronous operations. `async/await` simply makes asynchronous code easier to write, read, and maintain.

## 4. Can you use await outside of an async function?

The answer is `No`. The `await` keyword can only be used inside `async` function.

## 5. What is callback hell and why is it considered a problem?

**Callback hell** - a.k.a. `pyramid of doom` is a situation where multiple nested callbacks are used in Javascript. It is considered a problem, because it makes the code difficult to read, maintain, and denug. This simply occures when asynchronous operations chained together.
