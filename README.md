# Express.js Route & Query Parameters

This repository contains three Express.js assignments based on routing, route parameters, and query parameters.

The assignments demonstrate how to create dynamic routes and retrieve data from URLs using `req.params` and `req.query`.

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm

---

## Project Structure

```text
asst/
│
├── asst1/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── asst2/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── asst3/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
Assignment 1: Route Parameters
Objective

Implement dynamic routing using Route Parameters in Express.js.


Route
/student/:id
Example URL
http://localhost:3000/student/101
Expected Output
Student ID: 101

Another example:

http://localhost:3000/student/205

Output:

Student ID: 205
Concept Used
req.params
Assignment 2: Query Parameters
Objective

Retrieve and display data using Query Parameters.

Description

A /search route is created to accept name and course as query parameters.

Route
/search
Example URL
http://localhost:3000/search?name=Ricky&course=Node.js
Expected Output
Name: Ricky
Course: Node.js
Without Query Parameters

URL:

http://localhost:3000/search

Output:

No search data provided.
Concept Used
req.query
Assignment 3: Student Profile
Objective

Build a dynamic student profile using both Route Parameters and Query Parameters.

Description

The /student/:id route retrieves the student ID using a route parameter and retrieves the student's name and course using query parameters.

Route
/student/:id
Example URL
http://localhost:3000/student/101?name=John&course=FullStack
Expected Output
Student ID: 101
Name: John
Course: FullStack
Parameters Used

Route parameter:

req.params.id

Query parameters:

req.query.name
req.query.course
How to Run the Assignments

Each assignment is a separate Express.js application.

Assignment 1

Navigate to the Assignment 1 folder:

cd asst1

Install dependencies:

npm install

Start the server:

node server.js

Open:

http://localhost:3000/student/101
Assignment 2

Stop the previous server using:

Ctrl + C

Navigate to Assignment 2:

cd ../asst2

Install dependencies:

npm install

Start the server:

node server.js

Open:

http://localhost:3000/search?name=Ricky&course=Node.js
Assignment 3

Stop the previous server using:

Ctrl + C

Navigate to Assignment 3:

cd ../asst3

Install dependencies:

npm install

Start the server:

node server.js

Open:

http://localhost:3000/student/101?name=John&course=FullStack
Concepts Covered
1. Express.js Routing

Creating routes using Express.js:

app.get('/route', (req, res) => {
    // code
});
2. Route Parameters

Route parameters are dynamic values included in the URL path.

Example:

/student/101

Accessed using:

req.params.id
3. Query Parameters

Query parameters are values provided after ? in the URL.

Example:

/search?name=Ricky&course=Node.js

Accessed using:

req.query.name
req.query.course
4. Dynamic Routing

Dynamic routing allows the application to handle different values using the same route.

Example:

/student/101
/student/205
/student/305

All can be handled using:

/student/:id
Common Commands

Initialize a Node.js project:

npm init -y

Install Express.js:

npm install express

Run the application:

node server.js
Learning Outcome

After completing these assignments, the following Express.js concepts are demonstrated:

Creating Express.js servers
Creating GET routes
Dynamic routing
Route parameters
Query parameters
Using req.params
Using req.query
Handling URL data
Running Node.js applications
