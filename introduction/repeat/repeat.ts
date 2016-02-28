let a = 5;
const b = 'abc'

for (var i = 0; i < 100; i++) {
    let c = 2;
    let b = 2;

}

var c: string;
var d: number;
var e: boolean;
var f: any;

var favNumbers: number[] = [1, 2, 4, 5, 6]
var notSoFavNumbers: Array<number> = [12, 12]

var [first, second, ...rest] = favNumbers;

favNumbers.push(1, 2, 3);

enum Language {
    Java, Javascript, C
}

let preferred = Language.C;

function doSomething(x: Person, occupation?: string): string {
    return x.name + 'I did it!';
}

let eu: Person = { name: 'Ilii', age: 5, preferredLanguage: Language.C };
doSomething(eu);

interface Person {
    name: string,
    age: number,
    preferredLanguage?: Language
}

function ping(pong: (message: string) => void) {
    pong('m');
}

ping((m: string) => { console.log('Pong') });


class Presenter implements Person {

    constructor(public name: string, public age: number) {
    }

    present() {
        console.log(`Hello my name is ${this.name} blablablabla 
        blablablablab
        blablablabla`);
    }
    giveInterview(interview: (description: () => void) => void) {
        interview(() => this.present());
    }
    get description() {
        return `${this.name} is awesome`;
    }
}

let presenter = new Presenter('Ilii', 27);

