const user = 'zumrud'
console.log(user)


const a: number = 12
const b: string = '6'
const c: number = 2
let d: any;

console.log(a / c)
console.log(a * c)
d = true;
d = "hello"
d = 42

const sum = (a: number, b: number) => {
    return a + b;
}


const arr1 = [1, 2, 3]
let arr2 = ['hello', 2, false]
let arr4: (string | number | boolean)[] = ['hey', 'hello', false, 87]
let arr3: [string, number, boolean] = ['hey', 19, true]

// arr3 = arr2 
arr2 = arr3

const obj1 = {
    name: 'zumrud',
    age: 40,
    active: true
}

interface User {
    name: string,
    age: number,
    active?: boolean,
    skills?: string[]

}

const user1: User = {
    name: 'zumrud',
    age: 40
}

const greeting = (user: User) => {
    return user.active || false;
}


// ----- type -------
type UserId = string | number

type Albums = (string | number)[]

type Name = 'John' | 'Amy' | 'David'

type Gitarist = {
    id: UserId,
    name: Name,
    albums: Albums
}

const john: Gitarist = {
    id: 1,
    name: 'John',
    albums: ["hello", 37]
}

// ------- functions ------

const logMessage = (message: any): void => {
    console.log(`your message is: ${message}`)
}

const add = (a: number, b: number): number => {
    return a + b;
}

logMessage("hello")
logMessage(add(2, 5))

type MathFunc = (a: number, b: number) => number

// interface MathFunc {
//     (a:number, b:number) : number
// } 

const substract: MathFunc = (c, d) => {
    return c - d;
}

logMessage(substract(32, 5))


// ----- optional parameters ----------

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') return a + b + c
    return a + b
}
// ----- default parameters ----------

const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}

logMessage(addAll(2, 3, 4))
logMessage(addAll(2, 3))
logMessage(sumAll(2, 3, 4))
logMessage(sumAll(2, 3))


// ------ rest parameters --------

const total = (...num: number[]): number => {
    return num.reduce((prev, curr) => prev + curr)
}

logMessage(total(2, 4, 5))

const addToNum = (a: number, ...num: number[]): number => {
    return a + num.reduce((prev, curr) => prev + curr)
}

logMessage(addToNum(2, 4))