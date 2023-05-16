const user = 'zumrud'
console.log(user)


const a: number = 12
const b: string = '6'
const c: number = 2
let d: any;

console.log(a/c)
console.log(a*c)
d= true;
d= "hello"
d=42

const sum = (a:number,b:number ) => {
    return a+b;
} 


const arr1  = [1,2, 3]
let arr2 = ['hello', 2,false]
let arr3 : [string, number, boolean] = ['hey', 19, true]
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