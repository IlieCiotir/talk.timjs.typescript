import * as Spell from './spell';

export class Burn extends Spell.Spell {
    constructor() {
        this.name = "Burn";
        this.damage = 150;
    }

}