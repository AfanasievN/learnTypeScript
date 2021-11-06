// Generic types
const arrOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrOfStrings: Array<string> = ['a', 's', 'b'];

function reverse<T>(arr: T[]): T[] {
    return arr.reverse();
}

console.log(reverse(arrOfNumbers));
console.log(reverse(arrOfStrings));
