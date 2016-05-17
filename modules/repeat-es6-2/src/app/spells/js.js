import * as Spell from './spell';

export class DefineGlobalVariable extends Spell.Spell {
    constructor() {
        super("Define global variable", 1000);
    }
}