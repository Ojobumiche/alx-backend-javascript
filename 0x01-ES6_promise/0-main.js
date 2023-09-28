import getResponseFromAPI from "./0-promise.js";

// Call the function or use the Promise from the imported module
const response = getResponseFromAPI();

// Log whether the result is an instance of a Promise
console.log(response instanceof Promise);
