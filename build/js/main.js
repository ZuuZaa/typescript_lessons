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
