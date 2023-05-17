"use strict";
const user = 'zumrud';
console.log(user);
const a = 12;
const b = '6';
const c = 2;
let d;
console.log(a / c);
console.log(a * c);
d = true;
d = "hello";
d = 42;
const sum = (a, b) => {
    return a + b;
};
const arr1 = [1, 2, 3];
let arr2 = ['hello', 2, false];
let arr4 = ['hey', 'hello', false, 87];
let arr3 = ['hey', 19, true];
// arr3 = arr2 
arr2 = arr3;
const obj1 = {
    name: 'zumrud',
    age: 40,
    active: true
};
const user1 = {
    name: 'zumrud',
    age: 40
};
const greeting = (user) => {
    return user.active || false;
};
const john = {
    id: 1,
    name: 'John',
    albums: ["hello", 37]
};
// ------- functions ------
const logMessage = (message) => {
    console.log(`your message is: ${message}`);
};
const add = (a, b) => {
    return a + b;
};
logMessage("hello");
logMessage(add(2, 5));
// interface MathFunc {
//     (a:number, b:number) : number
// } 
const substract = (c, d) => {
    return c - d;
};
logMessage(substract(32, 5));
// ----- optional parameters ----------
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined')
        return a + b + c;
    return a + b;
};
// ----- default parameters ----------
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 4));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3, 4));
logMessage(sumAll(2, 3));
// ------ rest parameters --------
const total = (...num) => {
    return num.reduce((prev, curr) => prev + curr);
};
logMessage(total(2, 4, 5));
const addToNum = (a, ...num) => {
    return a + num.reduce((prev, curr) => prev + curr);
};
logMessage(addToNum(2, 4));
