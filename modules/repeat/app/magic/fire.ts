import * as Spell from './spell';

export class Burn implements Spell.Spell {
  public name= "Burn";
  public cost= 15;
  public damage = 150;

  public cast(target: Spell.Target) {
    target.attack(this.damage);
  }

}
