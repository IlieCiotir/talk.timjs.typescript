import {Wizard} from './wizard';
import {Spell, Target, CleanWounds, Drawn} from '../magic/magic';

export class WaterMage implements Wizard {
  public spells: Spell[] = [];

  constructor(public name: string, public life:number){
    this.spells.push(new CleanWounds(), new Drawn(), new Drawn(), new CleanWounds());
  }

  public castSpellOn(target: Target) {
    this.spells[Math.round(Math.random()*10) % this.spells.length].cast(target);
  }

  public attack(dmg: number) {

    this.life -= dmg;
    console.log(`${this.name} took ${dmg} magic and has ${this.life} left.`);
  }
}
