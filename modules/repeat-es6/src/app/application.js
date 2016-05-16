import {CleanWounds} from './spells/index';
import {FireWizard} from './wizards/fire';

export class Application {
    constructor(startMessage) {
        console.log(startMessage);

        let horatio = new FireWizard("Horatio Flameboyant");

        let ignatio = new FireWizard("Ignatio Flameboyant");
        
        horatio.cast(ignatio);
        ignatio.cast(horatio);c
    }
}