import {Spell} from './spells';

export class Burn extends Spell {
    constructor() {
        super("Burn", 100);
    }
}

export class Warm extends Spell {
    constructor() {
        super("Warm", 1);
    }
}