# Functions

Course: JavaScript (https://www.notion.so/JavaScript-244be95eaa1a80078093e30b6de9caf4?pvs=21)
Date: August 30, 2025 9:16 PM (GMT+4:30)
Duration (mins): 19.08
Section: JavaScript Fundamentals - Part 2

# What is a Function?

In simple words, a **function** is a **reusable block of code** that performs a specific task.

Think of it like a **variable**:

- A variable stores a **value**.
- A function stores **one or more lines of code** that we can execute whenever we need.

---

## Declaring a Function

We create a function using the `function` keyword, followed by:

1. The **function name**
2. A pair of **parentheses `()`** (for parameters if needed)
3. A **function body** inside curly braces `{}`

```jsx
function logger() {
  console.log("Hello World");
}
```

- The code inside `{}` is called the **function body**.
- To **execute (call/invoke/run)** the function, write its name followed by `()`:

```jsx
logger(); // Output: Hello World
```

---

## Functions with Input and Output

Functions aren’t just reusable blocks of code — they can also:

- **Receive data** (via **parameters**)
- **Return data** (via the `return` keyword)

💡 Think of a **fruit processing machine**:

- You put fruit inside (**input**)
- The machine processes it (**function body**)
- You get juice (**output**)

---

## Example: Function with Parameters and Return Value

```jsx
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // returns a string
}

// Call the function with arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Juice with 2 apples and 4 oranges.
```

---

## Key Points

- **Parameters** → placeholders for input values (defined in function declaration).
- **Arguments** → actual values we pass when calling the function.
- **Return value** → the result that comes out of the function (can be stored in a variable).