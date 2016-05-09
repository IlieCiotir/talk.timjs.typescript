import {FireMage} from './wizard/fireMage';
import {WaterMage} from './wizard/waterMage';


export class Application {
    constructor() {
        let Baconnius = new WaterMage("Baconnius Watershed");
        let Horavio = new FireMage("Horavio Flameboyant");

        Baconnius.castSpellOn(Horavio);
    }
}