import * as Spells from "./spell";

export class Burn implements Spells.Spell {
     public name= "Burn";
    public damage = 150;
    public cost = 10;
    
    public cast(target: Spells.Target) {
        target.takeDamage(this.damage);
    }
}