import {Spell, Target} from './spell';

export class Drown implements Spell {
    public name= "Drown";
    public damage = 100;
    public cost = 10;
    
    public cast(target: Target) {
        target.takeDamage(this.damage);
    }
}

export class CleanWounds implements Spell {
    public name= "Clean wounds";
    public damage = -100;
    public cost = 10;
    
    public cast(target: Target) {
        target.takeDamage(this.damage);
    }
}
