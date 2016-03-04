import {Spell, Target} from '../magic/magic';
export interface Wizard extends Target {
    name: string;
    spells: Spell[];
    castSpell(target: Target): void;
}

export * from './WaterMage';