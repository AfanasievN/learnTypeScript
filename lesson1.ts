// Hello world
const str: string = 'Hello';
console.log(str);

// Base types
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TS';

// Fibonacci numbers
const arrayOfNumbers: number[] = [1, 1, 2, 3, 5, 8, 13];
const arrayOfNumbers2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['John Doe', 123456];

// Any
let variable: any = 42;
// ...
variable = 'New string';
variable = [];

// ====
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Hi');

// Never
function trowError(message: string): never {
    throw new Error(message);
}

// function infinite(): never {
//     let a = true;
//     while (true) {
//         // if (a) break;
//     }
// }

// Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '12345';
// wrong type
// const id3: ID = true

// Types for null & undefined
type SomeType = string | null | undefined;
