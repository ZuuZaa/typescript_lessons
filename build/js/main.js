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
const names = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
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
// ------- FUNCTIONS ------
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
// ------ never -------
// const newFunc = (num: number): never => {
//     while (true) {
//         num++
//     }
//     throw console.error("loop error");
// }
// ------- custom type guard ------
const isNumber = (value) => typeof value === "number" ? true : false;
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    if (typeof value === "string")
        return 'string';
    return 'error';
};
// convert to more or less specific type
const one = 'hello';
const two = one; // less specific 
const three = one; // more specific
const four = 'world'; // this type coding cannot be used in react
const five = 'love';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
const myStringOfNumbers = addOrConcat(2, 3, 'concat'); // because it can also return number 
const myNumber = addOrConcat(2, 3, 'concat'); // be carefully! TS sees no problem, but there is a problem
// 10 as string  // TS doesn't like this but
10; // it is possible
// ---------- DOM -----------
const image = document.querySelector('img'); // its an HTML element or null 
const image1 = document.querySelector('#img'); // its just an element or null 
const image2 = document.getElementById('#img'); // now its an HTML element or null 
// image.src  doesn't like it, because it can be null, but
const image3 = document.querySelector('img'); // not null, if you know that html element exist
const image4 = document.querySelector('img'); // just an element 
// image4.src // there is no src attribute of html element 
const image5 = document.querySelector('img'); // it is image element 
image5.src; // there is no problem now
const image6 = document.querySelector('img'); // cannot be used in react
// original js code 
// const yearSpan = document.querySelector('.year') 
// const currentYear = new Date().getFullYear() 
// yearSpan.setAttribute('date', currentYear)
// yearSpan.textContent = currentYear
// 1st solution
// let yearSpan: HTMLElement | null 
// yearSpan = document.querySelector('.year') 
// let currentYear : string
// currentYear = new Date().getFullYear().toString()
// if (yearSpan) {
//     yearSpan.setAttribute('date', currentYear)
//     yearSpan.textContent = currentYear
// }
// 2nd solution
const yearSpan = document.querySelector('.year');
const currentYear = new Date().getFullYear().toString();
console.log(yearSpan, currentYear);
yearSpan.setAttribute('date', currentYear);
yearSpan.textContent = currentYear;
// --------- CLASSES --------------
const das = JSON.parse("55");
console.log(das);
class Coder {
    constructor(name, age, music, lang = 'Typescript') {
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
        this.getAge = () => `${this.name.toUpperCase()} is ${this.age} years old.`;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
}
const coderZ = new Coder('zumrud', 39, 'jazz');
console.log(coderZ.getAge());
// console.log(coderZ.age)
// console.log(coderZ.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, age, music);
        this.computer = computer;
        this.getLanguage = () => console.log(`i type ${this.lang}`);
        this.computer = computer;
    }
}
const webDevZ = new WebDev("macpro", "royal", "meyxana", 30);
webDevZ.getLanguage();
class Drummer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        console.log(`${this.name} ${action} the ${this.instrument}`);
    }
}
const Page = new Drummer("jimmy", "darbuka");
Page.play("strums");
/////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count; // because count is static 
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const victoria = new Peeps("victoria");
const steve = new Peeps("steve");
const olivia = new Peeps("olivia");
console.log(Peeps.count);
console.log(steve.id);
///////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
            return; // setter cannot return a value 
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBand = new Bands();
myBand.data = ['neil young', 'led zep'];
console.log(myBand.data);
myBand.data = [...myBand.data, "ZZ top"];
console.log(myBand.data);
//myBand. data = ['zumrud', 13]
