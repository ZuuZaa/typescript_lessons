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

const names: readonly string[] = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.


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

// ------- FUNCTIONS ------

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


// ------ never -------

// const newFunc = (num: number): never => {


//     while (true) {
//         num++
//     }
//     throw console.error("loop error");

// }

// ------- custom type guard ------
const isNumber = (value: any): boolean => typeof value === "number" ? true : false

const numberOrString = (value: number | string): string => {
    if (isNumber(value)) return 'number';
    if (typeof value === "string") return 'string';
    return 'error'
}


// ------- type assertions ------

type One = string
type Two = number | string
type Three = 'hello'

// convert to more or less specific type

const one: One = 'hello'
const two = one as Two // less specific 
const three = one as Three // more specific

const four = <One>'world' // this type coding cannot be used in react
const five = <string | number>'love'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if (c === 'add') return a + b
    return '' + a + b
}

const myStringOfNumbers: string = addOrConcat(2, 3, 'concat') as string // because it can also return number 
const myNumber: number = addOrConcat(2, 3, 'concat') as number // be carefully! TS sees no problem, but there is a problem


// 10 as string  // TS doesn't like this but
(10 as unknown) as string // it is possible


// ---------- DOM -----------

const image = document.querySelector('img') // its an HTML element or null 
const image1 = document.querySelector('#img') // its just an element or null 
const image2 = document.getElementById('#img') // now its an HTML element or null 

// image.src  doesn't like it, because it can be null, but
const image3 = document.querySelector('img')!  // not null, if you know that html element exist
const image4 = document.querySelector('img') as HTMLElement // just an element 
// image4.src // there is no src attribute of html element 
const image5 = document.querySelector('img') as HTMLImageElement // it is image element 
image5.src // there is no problem now

const image6 = <HTMLImageElement>document.querySelector('img') // cannot be used in react

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
const yearSpan = document.querySelector('.year') as HTMLSpanElement
const currentYear: string = new Date().getFullYear().toString()
console.log(yearSpan, currentYear)
yearSpan.setAttribute('date', currentYear)
yearSpan.textContent = currentYear


// --------- CLASSES --------------
const das = JSON.parse("55")
console.log(das)

class Coder {

    status!: boolean // add property without constructor

    constructor(
        public readonly name: string,
        private age: number,
        public music: string,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.age = age
        this.music = music
        this.lang = lang
    }

    public getAge = () => `${this.name.toUpperCase()} is ${this.age} years old.`
}

const coderZ = new Coder('zumrud', 39, 'jazz')

console.log(coderZ.getAge())
// console.log(coderZ.age)
// console.log(coderZ.lang)


class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,

    ) {
        super(name, age, music)
        this.computer = computer
    }

    public getLanguage = () => console.log(`i type ${this.lang}`)
}

const webDevZ = new WebDev("macpro", "royal", "meyxana", 30)
webDevZ.getLanguage()


interface Musician {
    name: string,
    instrument: string,
    play(action: string): void
}

class Drummer implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        console.log(`${this.name} ${action} the ${this.instrument}`)
    }
}

const Page = new Drummer("jimmy", "darbuka")
Page.play("strums")

/////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count // because count is static 
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}


const victoria = new Peeps("victoria")
const steve = new Peeps("steve")
const olivia = new Peeps("olivia")

console.log(Peeps.count)
console.log(steve.id)


///////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value
            return // setter cannot return a value 
        }else throw new Error("Param is not an array of strings")
    }
}

const myBand = new Bands()

myBand.data = ['neil young', 'led zep']
console.log(myBand.data)

myBand.data = [...myBand.data, "ZZ top"]
console.log(myBand.data)

//myBand. data = ['zumrud', 13]