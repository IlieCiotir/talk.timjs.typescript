//  let const
let a = 1;

const b = 3;

// show case let in for
for (var i: number = 0; i < 100; i++) {
    let c = i;
    let b = i;  // this works.. ?
}

// types
// primitives
var myAwesomevar: string = 'wqwe';
var myAwesomeNumber: number = 1;
var myAwesomeBoolean: boolean = true;

// arrays
var myAwesomeArray: number[] = [1, 2, 3, 4, 5];
var myOtherAwesomeArray: Array<boolean> = [true, false];

// enums
// simple
enum Languages {
    Javascript, Typescript, Java, CSharp
}

Languages.CSharp == Languages.Typescript;
var language = Languages[1]; // access as array

// different start point
enum Languages2 {
    Javascript = 1, Typescript
}

// other values
enum Languages3 {
    Javascript = 'AWesome' as any, Typescript = <any>'UberAwesome'
}

// any  start with this?
var anything: any = 1;
anything = 'abc';

// function, void
function doSomething(): void {
    console.time();
}

// function, return
function doSomethingAndReturn(): typeof Languages {
    return Languages;
}

doSomethingAndReturn().Java;

// parameters
function doSomethingWithThis(a: number): string {
    return a + '';
}

doSomethingWithThis(5).toUpperCase();

// interfaces
// inline
function anotherMethod(person: { name: string, age: number }): void {
    let {name, age} = person; // object destructuring
}

anotherMethod({ name: 'ion', age: 20 });

var f: (person: { name: string, age: number }) => void;
f = anotherMethod;

// interface 
interface Person {
    name: string;
    age: number;
    nationality?: string;
}

let person: Person = { name: 'ilie', age: 5, nationality: 'javascript' };
anotherMethod(person); // refactor the other methods to use this interface?


    
