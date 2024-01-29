# This is a version of my portfolio written in ReactJS
## The live link can be found here [here](https://chrismungiria.github.io/react-portfolio/)
## The HTML/CSS version can be found [here](https://chrismungiria.github.io/mungiria_portfolio/)
# Questions
1. What is ```npm``` ?
   - Node Package Manager (npm) is a package manager for JavaScript, which allows devlopers to install, share and manage third-party packages. ```npm``` also hosts a public repository where developers can publish their packages.
  
2. What is SPA?
   - A Single Page Application (SPA) is a type of webiste that a shows a user a single page but dynamically changes the content within the page, rather than loading new pages from the server. This can be achieved using JS libraries like React, Angular or Vue.
  
3. WHat is the event loop?
   - To understand the event loop we can take an example:
 ```
console.log("Start");

setTimeout(function () {
  console.log("Timeout callback");
}, 1000);

console.log("End");
```
  - The console will log ```Start``` then ```End``` and lastly ```Timeout callback```. JavaScript uses a call stack that keeps track of function calls. When a function is called it is added onto the stack and removed when it finishes executing. It also has an event queue which holds functions that are ready to be executed. Examples include events like user interactions, timer expirations, or AJAX responses.
  - The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack, allowing it to be executed.

4. What is the difference between export x and export default x? How do you import them differently?

   - Using ```export``` is called using a named export, meaning that the variable or function is being explicitly named and import it using its exact name in the importing file. Example:
  
```
// exportFile.js
export const x = 42;
export function myFunction() {
  // function code
}
```

```
// anotherFile.js
import { x, myFunction } from './exportFile';

console.log(x);   // Accessing the exported constant
myFunction();    // Accessing the exported function
```
   - Using ```export default``` is often used when you want to export a single value or the main functionality of the module. There can be only one default export per module. Example:

```
// exportFile.js
const x = 42;
export default x;
```

```
// anotherFile.js
import myValue from './exportFile';

console.log(myValue);   // Accessing the default export
```

5. Why do you use className as a property in React and not class?
- ```class``` is a reserved JavaScript keyword, and since React components are essentially JavaScript classes, using ```class``` directly in JSX leads to conflicts with JavaScript syntax, ```className``` closely resembles it and is used as a JSX replacement.

6. Why should you not write the following? What will happen?\
```<button onClick={setCounter(counter + 1)}> +1 </button>```
- The above has some issues, first, it is immediately executed when the component is mounted rather than when the button is clicked. Every time the component re-renders, the ```setCounter``` function is called.
- The second issue is that the button might not work as intended as the ```onClick``` expects a function reference. Intead it should be:\
  ```<button onClick={() => setCounter(counter + 1)}> +1 </button>```
7. What is object deconstruction and how is it connected to React components (example)?
- This is a feature in JavaScript that allows you to extract properties from objects and assign them to variables.

```
// exportFile.js
const data = {
  name: 'John Doe',
  age: 25
};

export default data;
```

```
import data from './exportFile';
const {name, age} = data;
console.log("Name",name);
console.log("Age", age);
```
8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

- React uses JSX which is neither HTML or JavaScript like ```const heading = <h1>This is a heading</h1>;```. JSX is a syntax extension for JavaScript recommended by React for describing what the UI should look like. JSX allows developers to write HTML-like code within JavaScript.
- In the example above, there is a ```<h1>``` which is HTML and a ```const heading``` which is JavaScript, combined they make JSX.


9. What is async/await? Bring an example

- The ```async``` keyword is used to define a function that returns a Promise. An ```async``` function can contain one or more ```await``` expressions, which pause the execution of the function until the Promise is resolved or rejected.
- The ```await``` keyword is used to wait for a Promise to settle (either fulfilled or rejected with an error). It can only be used inside an async function.
- Example:\
```
async function fetchDataAndLog() {
  try {
    console.log('Fetching data...');
    const result = await fetchData();
    console.log('Data:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```
- Since fetching data takes time, we use the ```await``` keyword to tell the function to wait for ```fetchData()```. This is typically used within a try, catch block since a promise can return a result or an error.

10. What is a Promise? Bring an example

- A Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. The possible outcomes here are similar to that of promises in real life.
- It has three states,
    - Pending: The initial state. The Promise is neither fulfilled nor rejected.
    - Fulfilled: The operation completed successfully, and the Promise has a resulting value.
    - Rejected: The operation failed, and the Promise has a reason for the failure.
 
- An example:

```
// Simulating an asynchronous function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      // Simulate a successful API response
      resolve(data);
      // Simulate an error
      // reject(new Error('Failed to fetch data'));
    }, 1000);
  });
}

// Using the Promise to fetch and log data
fetchData()
  .then(result => {
    console.log('Data:', result);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```
