import {Spell, Target} from './spell';

export class Drawn implements Spell {
  public name = "Drawn";
  public cost = 10;
  public damage = 100;

  public cast(target: Target) {
    target.attack(this.damage);
  }
}

export class CleanWounds implements Spell {
  public name= "Clean Wounds";
  public cost= 20;
  public damage = -100;

  public cast(target: Target) {
    target.attack(this.damage);
  }
}
