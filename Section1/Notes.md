# `Section 2: JavaScript Fundamentals - Part 1`

## `What is Javascript?`

`JavaScript` is `High Level`,`Object Oreinted`, `Multi-Paradigm`Programming Langauge.
Lets deconstruct it:

1. `Programmig Language`: Is a tool that that allows us to write code that will instruct a computer to do something.
2. `High Level`: In these type of languages we don't have to worry about complex stuff like `memory management` and other things.
3. `Object Oriented`: It means that `JavaScript` is mostly based on the concept of objects for storing most kinds of data.
4. `Multi-Paradigm`: Means that `JavaScript` is so flexible that we can use all kinds of programming style such as imparative and declarative programming which are styles of structuring our code in different ways.

## `Role of JavaScript in Web Development`

In web development we have three technologies which are:

1. `HTML`: Used to define the stucture of our websites or we can say it is responsible for the content of a webpage like text, images, buttons and all the other contents.
2. `CSS`: Used for presentation of the content or we can say it is used for styling the webpage.
3. `JavaScript`: Is the real programming language of the web development it is used to add dynamic and interactive effects to our websites we can use it for other things as well like manipulating styles of css or loading data from a remote server and building entire applications in a browser.

We can create alot of things using `JavaScript` like:

1. `Frontend Apps`: By using `JavaScript` in browsers we can create fully functional frontend applications.
2. `Backend Apps`: We can use the `JavaScript` outside of the browser as well by using a very popular technology called `node.js` which is completely outside of the browser and is used to create backend applications which runs on a web-server and interact with databases and stuff like that.
3. `Native Mobile Apps`: We can use `JavaScript` to create native mobile applications using techlogies like `react native` and others.
4. `Native Desktop Applications`: We can also used `JavaScript` to create native desktop applications as well by using tools like `electron` which was not possible till now but now it is possible.

There is almost nothing that we can't build with `JavaScript`

## `JavaScript Releases Overview`

`JavaScript` had one biggest release which was `ES2015` which is also called `ES6` the `ES` stands for `EcmaScript` and from `ES6` on `JavaScript` releases a new version every year which is called `modern JavaScript` and contains new concepts and modern stuff.

## `Linking a JavaScript File`

We can use two ways of linking a javascript file to our `HTML` file:

1. `Internal JavaScript`: The first way of using `JavaScript` is to use a `<script>` tag and inside of that we put the `JavaScript` code.

```html
<script>
  let js = "amazing";
  if (js === "amazing") alert("JavaScript is fun");
</script>
```

2. `External JavaScript`: The second way of using `JavaScript` is to use it in a separate file and then link that file to our html using the `src=""` attribute in the `<script>` tag.

```html
<script src="script.js"></script>
```

And to print something to `console` we should use the `console.log()` function in `JavaScript`

## `Values and Variables`

A `value` is the most fundamental unit of information that we have in programming one of the best things that we can do with values is to store them into `variables` so that we can use them over and over again.
A `Variable` is like a box in real world which can put something in it and label that box so that if we want to use the things which are in that box we can use its label, and in `JavaScript we can create variables like this:

```js
let variableName = value;
// Real World Example
let firstName = "Khalid Rahman"; // stores Khalid Rahman in memory of the computer
```

in here we declared a variable with the name/label of `firstName` and assigned the value `Khalid Rahman` to it so if we want to use the value again we can just write the name of the variable as many times as we want.

```js
console.log(firstName); // Prints Khalid Rahman
console.log(firstName); // Prints Khalid Rahman
console.log(firstName); // Prints Khalid Rahman
```

now if I change the name to something else it will be changed in all places.

## `Rules of writing variable names`

1. We can not start a variable name with a number.
2. We can not use special symbols without `$` and `_` in naming variable and we can use both of these special symbols at the starting of the name as well.
3. We should use a naming convention like `camelCase` or `underscore_case` but the `camelCase` is the standard naming convention in `JavaScript`.
4. We can not use `reserved` keywords in naming variables like `new`, `function`, `name` or other reserved keywords.
5. We should write constants in uppercase like `const PI = 3.1415`.
6. We should not write the first letter of a variable in uppercase.
   Examples:

```js
let firstName = "Khalid Rahman"; // allowed
let first_name = "Khalid Rahman" // allowed
let 3years = 3; // not allowed
let function = "My Function"; // not allowed
let LastName = "Khalid Rahman"; // allowed but not recommended
let jonas&khalid = "JK" // not allowed
let $function = "My Function" // allowed
```

## `Data Types`

A value can have either premitive data type or reference data type and there are 7 premitive data types in `JavaScript` which are discussed below:

1. `number`: In JavaScript for all types of numbers the floating point numbers are used they are used for both decimal numbers and integers.

```js
let age = 18;
```

2. `string`: Is sequence of characters used to store text and we should always wrap a string in a single quotation `'` or a double quotation `"`.

```js
let lastName = "Hanify";
```

3. `Boolean`: Is a logical data type which can be either true or false which is used for taking decisions.

```js
let isMale = true;
```

4. `Undefined`: value taken by a variable which is note yet defined and a variable which is not yet defined is simply just a variable which is declared but not assigned a value like `let children;` which we can say it is has empty value.

```js
let books; // by default the datatype is undefined
```

5. `Null`: Also means emtpy value but used in different circumstances.

```js
let grades = null;
```

6. `Symbol`: defines a value that is unique and can not be chagned.[not useful]
7. `BigInt`: used to represent a number which is very big and can not be stored in number.

```js
const bigNumber = 231488399292818283n;
```

The first three data types are the most important data types and also the most used data types.

`JavaScript` has a feature called `Dynamic Typing` which means that we do not need to define the data type of a value manually instead they are determined automatically.

Another feature of dynamic typing is that later in our code we can assign another value with another datatype to the same variable for example the variable x can initially be a number and then later it can be a string.

And it is important to know that in `JavaScript` it is the value which determines the data type not the variable the variable simply stores the value.

### `Commenting Code`

Comments are used to define a code or to deactivate a code without deleting it and there are two types of comments

1. `Single Line`: Are used to insert a one line comment and we can insert it by using `//` at the begening of the statement.

```js
// Declaring Varible --> this is a single line comment
let firstName = "Khalid Rahman";
```

2. `Multi Line`: Are used to insert multi line comments and we can insert it by using `/*` at the start and then at the last line we can use `*/`

```js
/* 
This is 
A multi line 
comment
*/
```

There is a special operator called `typeof` which is used to show the type of a value of a variable.

```js
console.log(typeof true); // logs Boolean
```
