import {Target, Spell} from '../magic/magic';

export interface Wizard extends Target {
  spells: Spell[],
  name: string,
  life: number,
  castSpellOn(wizard: Target) : void

}
