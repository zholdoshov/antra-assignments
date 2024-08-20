# Assignment 14 (Advanced Training)

## What are middleware functions in Express.js, and how do they work?

Middleware functions in Express.js are functions that run between receiving a request and sending a response. They can modify the request, response, or even end the request-response cycle. Middleware is often used for tasks like logging, authentication, and handling errors.

## What is JWT, and how does it work?

JWT (JSON Web Token) is a standard for securely sharing information between parties over a network. It contains encoded data, which can be verified and trusted because it is digitally signed. JWT is commonly used for authentication, where a server issues a token to a client, and the client sends it with each request to access protected resources.

## How do you securely store JWT on the client-side?

JWT should be stored securely on the client-side to prevent unauthorized access. The best practice is to store JWT in an HTTP-only cookie, which the browser manages and cannot be accessed by JavaScript, reducing the risk of cross-site scripting (XSS) attacks. LocalStorage or SessionStorage can be used, but they are more vulnerable to XSS.

## How does token expiration work in JWT?

Token expiration in JWT is handled using the `exp` claim, which specifies the time when the token should expire. After this time, the token becomes invalid, and the client must request a new token. This ensures that even if a token is compromised, it will only be valid for a limited time.
