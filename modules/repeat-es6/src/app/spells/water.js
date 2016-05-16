import * as Spells from './spells';

export class Drown extends Spells.Spell {
    constructor() {
        super("Drown", 100);
    }
}

export class CleanWounds extends Spells.Spell {
    constructor() {
        super("Clean wounds", -100);
    }
}
