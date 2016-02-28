let a = 5;
const b = 'awe';

for (var i = 0; i < 100; i++) {
    let c = 5;
    let b = 5;

}
let c: string;
let d: number;
let e: boolean;
let f: any;

let favNumbers = [1, 2, 3, 4];

enum Languages {
    Java = 10, Javascript, Csharp
}

let preferredLanguage = Languages.Csharp;

function doSomething(x: Person, ocupataion?: string): string {
    return x.nume + '5';
}


// let ilie: Person = { nume: 'Ilie', age: 2 };

// doSomething(ilie);

interface Pong {
    (name: string): number
}

let pong: Pong = (m: string) => 1;

interface Person {

    nume: string,
    age: number,
    nationality?: string,
    prezent: () => void
}
let v: any = pong;
v.name = 5;
function ping(pong: (message: string) => void) {
    pong('m');
}

class Om {

}
class Animal {
    
}
class Presenter extends Om implements Person {

    constructor(public nume: string, public age: number) {
        super();
    }

    prezent() {
        console.log()
    }

    get description() {
        return `${this.nume} Is awesome`;
    }
}

let p: Person = new Presenter('Ilie', 2);
p.prezent();









