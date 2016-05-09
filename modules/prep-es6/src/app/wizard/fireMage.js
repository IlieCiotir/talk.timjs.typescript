import {Wizard} from './wizard';
import {Burn} from '../magic/magic';

export class FireMage extends Wizard {
    constructor(name) {
        super();
        this.name = name;
        this.spells = [new Burn()];
    }
}