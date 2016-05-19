import * as Spells from './spells';

class DeclareGlobalVariable extends Spells.Spell {
    constructor() {
        super("Define global variable", 9001);
    }
}

export {DeclareGlobalVariable}

export function a() {
    console.log("js")
}