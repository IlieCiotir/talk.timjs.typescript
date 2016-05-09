import {Wizard} from './wizard';
import {CleanWounds, Drawn} from '../magic/magic';

export class WaterMage extends Wizard {
    constructor(name) {
        super();
        this.name = name;
        this.spells = [new CleanWounds(), new Drawn()];
    }
}