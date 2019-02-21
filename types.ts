// declare format
// let variable_name : type = value
let isDone: boolean = false;

//basic types in typescript: boolean, number, string, array, tuple, enum, any,void, null& undefined, never, object,type-assertions
//http://www.typescriptlang.org/docs/handbook/basic-types.html

//array
let list: number[] = [1,2,3];
let arr : Array<number> =[1,2,3];

//tuple, array with different element
let x:[string,number];
x =["hello", 1];
//err if x=[1,"ppp"];


//enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

//any
let anyarray:any[] =[1,true,"hello"];

//void
function warnUser(): void {
    console.log("This is my warning message");
}

//object,let back later


//assert
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

//interface, for type-checking, http://www.typescriptlang.org/docs/handbook/interfaces.html
//argument format
//variable_name: type
//note: type-check the obj have the string properties called label
/*
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
*/
// then the declaration above, can be
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//optional
interface SquareConfig {
    color?: string;
    width?: number;
}

//Function Types
//function(input_type_check):return_type_check
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//classes
//http://www.typescriptlang.org/docs/handbook/classes.html
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
//inheritance
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
//public , private
//When a member is marked private, it cannot be accessed from outside of its containing class

//getter setter format
// get/set ?

//static

//Modules
//http://www.typescriptlang.org/docs/handbook/modules.html

import { say } from "./helloworld"