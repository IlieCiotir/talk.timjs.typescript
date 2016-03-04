import {Drown, Burn} from './magic/magic';
import {WaterMage} from './wizards/wizard';

export class Application{
    constructor(magic) {
        console.log(magic);
        
       let archibald = new WaterMage("Archibald the Great!");
       let trevor = new WaterMage("Magical Trevor.");
       
       archibald.castSpell(trevor);
       trevor.castSpell(archibald);
    }
}