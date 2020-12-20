export {};
let isBeginner: boolean = true;
let total: number = 0;
const nameInfo: string = "Shubham";

let sentence: string = `My name is ${nameInfo}
I am learning Typescript`;

console.log(sentence);

//  null and undefined both are subtypes of all other variable types
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let userName: string = undefined;

// two different syntax to declare array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple type for mixed array - strict for number of parameter and sequence of variable type.
let user: [string, number] = ["Chris", 30];

// enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

console.log(c);

// type any

let randomVal: any = 10;
randomVal = true;
randomVal = "Typescript";

let myVar: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

// type assertion - type casting
if (hasName(myVar)) {
  console.log(myVar.name);
}
(myVar as String).toUpperCase();

// type inference
let a;
a = false;
a = 20;

let b = 89;
// b = true; // gives error

// ability to specify union of types for the same variable

let multiType: number | boolean;
multiType = 87;
multiType = true;
