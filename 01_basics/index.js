// "use strict";
// treat all JS Code as newer version of JS , now a days basically it takes automatically newer version

//orginal documentation of JS is found at
//https://tc39.es/ecma262/
// MDN Javascript also used for documentation



// +++++++++++++++++++++++++++++++++++++++++++++ //

// stack and heap memory (Primitive)
// stack memory is used for storing local variables and function call stack
// heap memory (Non Primitive)
// heap memory is used for storing objects and arrays

// const gameName = new String("Razaque")
// console.log(gameName.__proto__); //gives empty object



// Array in js
const arr = [1,2,3,"45","ab"]
// const shallowCopy = Array.from(arr);
// console.log(shallowCopy);

// shallowcopy: This means that if the original array contains objects or other arrays, changes to those nested objects/arrays in the copied array will also affect the original array.
// Deep Copy: duplicates all elements and any nested objects/arrays entirely, so changes to the copy do not affect the original array.




