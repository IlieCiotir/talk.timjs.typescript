import {Wizard} from './wizard';
import {Spell, Target, Burn, Drown, CleanWounds} from '../magic/magic';

export class WaterMage implements Wizard {
    public spells: Spell[] = [];
    private life = 1000;
    constructor(public name: string) {
        this.spells.push(new Drown(), new CleanWounds())
    }
    
    public castSpell(target: Target) {
        this.spells[1].cast(target);
    }
    
    public takeDamage(dmg: number) {
        this.life -= dmg;
        console.log(`I ${this.name} have been hit, I have ${this.life} left!`);
    }
}