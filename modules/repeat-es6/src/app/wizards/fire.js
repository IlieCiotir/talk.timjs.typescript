import {Wizard} from './wizards';
import {Burn as Good} from '../spells/fire';
import {CleanWounds as Bad} from '../spells/all';

export class FireWizard extends Wizard {
    constructor(name) {
        super(name, [new Good(), new Bad()])
    }
}